import React from "react";
import BookRatings from "./BookRatings";
import { render } from "@testing-library/react";
import WrapWithContext from "../../testing/WrapWithContext";
import { bookWithRatings } from "../../mocks/books";

const setup = (book: Book) =>
  render(
    <WrapWithContext>
      <BookRatings book={book}></BookRatings>
    </WrapWithContext>
  );

test("should render rating info", () => {
  const { getByText } = setup(bookWithRatings);

  expect(getByText(bookWithRatings.ratings[0].name)).toBeTruthy();
  expect(getByText(bookWithRatings.ratings[0].text)).toBeTruthy();
});
