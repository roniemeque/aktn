import React from "react";
import BookRatingsList from "./BookRatingsList";
import { render } from "@testing-library/react";
import WrapWithContext from "../../testing/WrapWithContext";
import { bookWithRatings } from "../../mocks/books";

const setup = (book: Book) =>
  render(
    <WrapWithContext>
      <BookRatingsList ratings={book.ratings}></BookRatingsList>
    </WrapWithContext>
  );

test("should render rating info", () => {
  const { getByText } = setup(bookWithRatings);

  expect(getByText(bookWithRatings.ratings[0].name)).toBeTruthy();
  expect(getByText(bookWithRatings.ratings[0].text)).toBeTruthy();
});
