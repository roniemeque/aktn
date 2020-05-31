import { sortBooksIntoCategories } from "./books";
import { books } from "../mocks/books";

test("should sort books properly", () => {
  expect(sortBooksIntoCategories(books)).toHaveLength(3);
  expect(sortBooksIntoCategories(books)[0].title).toBeTruthy();
  expect(sortBooksIntoCategories(books)[0].books).toHaveLength(2);
});
