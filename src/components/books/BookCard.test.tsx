import React from "react";
import BookCard from "./BookCard";
import { render } from "@testing-library/react";
import WrapWithContext from "../../testing/WrapWithContext";
import { book } from "../../mocks/books";

const setup = (book: Book) =>
  render(
    <WrapWithContext>
      <BookCard book={book}></BookCard>
    </WrapWithContext>
  );

test("should render book info", () => {
  const { getByText, getByAltText } = setup(book);

  expect(getByText(book.title)).toBeTruthy();
  expect(getByText(book.category)).toBeTruthy();
  expect(getByAltText(book.title)).toBeTruthy();
});
