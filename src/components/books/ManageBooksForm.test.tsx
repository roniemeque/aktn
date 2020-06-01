import React from "react";
import ManageBooksForm from "./ManageBooksForm";
import { render } from "@testing-library/react";
import WrapWithContext from "../../testing/WrapWithContext";
import { book } from "../../mocks/books";
import { toHaveFormValues } from "@testing-library/jest-dom/matchers";

expect.extend({ toHaveFormValues });

const setup = (book?: Book) =>
  render(
    <WrapWithContext>
      <ManageBooksForm book={book}></ManageBooksForm>
    </WrapWithContext>
  );

test("should render inputs", () => {
  const { getByLabelText } = setup(book);

  expect(getByLabelText(/título/i)).toBeTruthy();
  expect(getByLabelText(/sinopse/i)).toBeTruthy();
  expect(getByLabelText(/gênero/i)).toBeTruthy();
  expect(getByLabelText(/imagem/i)).toBeTruthy();
});

test("should render proper button text when adding", () => {
  const { getByText } = setup();
  expect(getByText(/criar/i)).toBeTruthy();
});

test("should render proper button text when editing", () => {
  const { getByText } = setup(book);
  expect(getByText(/editar/i)).toBeTruthy();
});

test("should have empty inputs when adding", () => {
  const { getByTestId } = setup();
  expect(getByTestId("managing-books-form")).toHaveFormValues({
    title: "",
    shortDesc: "",
    category: "",
    thumb: "",
  });
});

test("should have filled inputs when editing", () => {
  const { getByTestId } = setup(book);
  expect(getByTestId("managing-books-form")).toHaveFormValues({
    title: book.title,
    shortDesc: book.shortDesc,
    category: book.category,
    thumb: book.thumb,
  });
});
