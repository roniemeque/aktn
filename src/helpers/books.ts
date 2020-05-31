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
