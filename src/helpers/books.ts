import { API_URL } from "../settings";

export const sortBooksIntoCategories = (books: Book[]): CategoryWithBooks[] => {
  const map = books.reduce((acum, book) => {
    acum[book.category] = [...(acum[book.category] ?? []), book];
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
  bookId: string,
  data: any,
  method = "PATCH"
): Promise<Book | null> => {
  try {
    const res = await fetch(`${API_URL}/books/${bookId}`, {
      method,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { book } = await res.json();
    return book;
  } catch (error) {
    console.error(error);
    return null;
  }
};
