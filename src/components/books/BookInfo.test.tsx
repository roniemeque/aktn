import React from "react";
import BookInfo from "./BookInfo";
import { render } from "@testing-library/react";
import WrapWithContext from "../../testing/WrapWithContext";
import { book } from "../../mocks/books";

const setup = (book: Book) =>
  render(
    <WrapWithContext>
      <BookInfo book={book}></BookInfo>
    </WrapWithContext>
  );

test("should render book info", () => {
  const { getByText, getByAltText } = setup(book);

  expect(getByText(book.title)).toBeTruthy();
  expect(getByText(book.category)).toBeTruthy();
  expect(getByAltText(book.title)).toBeTruthy();
});
