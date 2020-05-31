import React from "react";
import AddBookRating from "./AddBookRating";
import { render } from "@testing-library/react";
import WrapWithContext from "../../testing/WrapWithContext";
import { book } from "../../mocks/books";

const setup = (book: Book) =>
  render(
    <WrapWithContext>
      <AddBookRating refreshBookData={() => null} book={book}></AddBookRating>
    </WrapWithContext>
  );

test("should render inputs", () => {
  const { getByLabelText, getByText } = setup(book);

  expect(getByLabelText(/nome/i)).toBeTruthy();
  expect(getByLabelText(/achou/i)).toBeTruthy();
  expect(getByText(/enviar/i)).toBeTruthy();
});
