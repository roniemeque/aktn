import React from "react";
import CategoryWithBooks from "./CategoryWithBooks";
import { render } from "@testing-library/react";
import WrapWithContext from "../../testing/WrapWithContext";
import { books } from "../../mocks/books";
import { sortBooksIntoCategories } from "../../helpers/books";

const categories = sortBooksIntoCategories(books);

const setup = (category: CategoryWithBooks) =>
  render(
    <WrapWithContext>
      <CategoryWithBooks categoryGroup={category}></CategoryWithBooks>
    </WrapWithContext>
  );

test("should render category title and category inside cards", () => {
  const [category] = categories;
  const { getAllByText } = setup(category);

  expect(getAllByText(/fantasy/i).length).toBeGreaterThan(1);
});
