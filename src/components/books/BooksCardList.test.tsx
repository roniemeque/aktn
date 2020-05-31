import React from "react";
import BooksCardList from "./BooksCardList";
import { render } from "@testing-library/react";
import WrapWithContext from "../../testing/WrapWithContext";
import { books } from "../../mocks/books";

const setup = (books: Book[]) =>
  render(
    <WrapWithContext>
      <BooksCardList books={books}></BooksCardList>
    </WrapWithContext>
  );

test("should render book item", () => {
  const { getByText } = setup(books);

  expect(getByText(books[0].title)).toBeTruthy();
  expect(getByText(books[1].title)).toBeTruthy();
});
