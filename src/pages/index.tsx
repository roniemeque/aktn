import { GetServerSideProps } from "next";
import Link from "next/link";
import React, { FC } from "react";
import ToggleInput from "../components/app/ToggleInput";
import CategoryWithBooks from "../components/books/CategoryWithBooks";
import { sortBooksIntoCategories } from "../helpers/books";
import useEditingMode from "../hooks/useEditingMode";
import { API_URL } from "../settings";
import styled from "../styles/styled";
import { Title1, WithActionWrapper } from "../styles/Titles";

interface Props {
  books: Book[];
}

const Home: FC<Props> = ({ books }) => {
  const [editingMode, setEditingMode] = useEditingMode();

  const booksByCategory = sortBooksIntoCategories(books);

  return (
    <>
      <ToggleInput
        label="Modo de edição"
        toggled={editingMode}
        toggle={() => setEditingMode(!editingMode)}
        name="editing-mode"
      ></ToggleInput>

      <WithActionWrapper content="+">
        <Title1>Livros</Title1>
        {editingMode && (
          <Link href="/books/add">
            <a title="Adicionar livro">
              <span></span> Adicionar
            </a>
          </Link>
        )}
      </WithActionWrapper>
      {booksByCategory.map((categoryGroup) => (
        <CategoryWithBooks
          key={categoryGroup.title}
          categoryGroup={categoryGroup}
        ></CategoryWithBooks>
      ))}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { books } = await (await fetch(`${API_URL}/books`)).json();
    return {
      props: {
        books,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        books: [],
      },
    };
  }
};

export default Home;
