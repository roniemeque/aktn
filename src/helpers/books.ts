import { API_URL } from "../settings";

export const sortBooksIntoCategories = (books: Book[]): CategoryWithBooks[] => {
  const map = books.reduce((acum, book) => {
    const category = book.category.toLowerCase();
    acum[category] = [...(acum[category] ?? []), book];
    return acum;
  }, []);

  return Object.keys(map).map((title) => ({
    title,
    books: map[title],
  }));
};

export const combineRatings = (book: Book, rating: Rating) => [
  ...(book?.ratings || []),
  {
    ...rating,
  },
];

export const fetchBook = async (bookId: string): Promise<Book | null> => {
  try {
    const { book } = await (await fetch(`${API_URL}/books/${bookId}`)).json();
    return book;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const mutateBook = async (
  method: string,
  data: any,
  bookId?: string
): Promise<Book | null> => {
  const url = bookId ? `${API_URL}/books/${bookId}` : `${API_URL}/books`;

  try {
    const res = await fetch(url, {
      method,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { book, createdId } = await res.json();

    return book || createdId;
  } catch (error) {
    console.error(error);
    return null;
  }
};
