import { GetServerSideProps } from "next";
import Link from "next/link";
import React, { FC } from "react";
import ToggleInput from "../components/app/ToggleInput";
import CategoryWithBooks from "../components/books/CategoryWithBooks";
import { sortBooksIntoCategories } from "../helpers/books";
import useEditingMode from "../hooks/useEditingMode";
import { API_URL } from "../settings";
import styled from "../styles/styled";
import { Title1 } from "../styles/Titles";

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

      <TitleWrapper>
        <Title1>Livros</Title1>
        {editingMode && (
          <Link href="/manage-books">
            <a title="Adicionar livro">
              <span></span> Adicionar
            </a>
          </Link>
        )}
      </TitleWrapper>
      {booksByCategory.map((categoryGroup) => (
        <CategoryWithBooks
          key={categoryGroup.title}
          categoryGroup={categoryGroup}
        ></CategoryWithBooks>
      ))}
    </>
  );
};

const TitleWrapper = styled.div`
  display: flex;
  h1 {
    line-height: 1;
  }
  align-items: flex-end;
  a {
    font-size: 1.4rem;
    margin-left: 1rem;
    display: flex;
    align-items: center;
    span {
      margin-right: 0.1rem;
      display: inline-block;
      position: relative;
      width: 1.4rem;
      height: 1.4rem;
      color: white;
      background: ${({ theme }) => theme.colors.blue};
      border-radius: 50%;
      &::before {
        line-height: 1;
        content: "+";
        position: absolute;
        left: 50%;
        top: 44%;
        transform: translate(-50%, -50%);
      }
    }
  }
`;

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
