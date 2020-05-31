import { sortBooksIntoCategories, combineRatings } from "./books";
import { books, bookWithRatings } from "../mocks/books";

test("should sort books properly", () => {
  expect(sortBooksIntoCategories(books)).toHaveLength(3);
  expect(sortBooksIntoCategories(books)[0].title).toBeTruthy();
  expect(sortBooksIntoCategories(books)[0].books).toHaveLength(2);
});

test("should combine ratings properly", () => {
  expect(
    combineRatings(bookWithRatings, { name: "Ronie", text: "Cool book" })
  ).toHaveLength(3);
});
