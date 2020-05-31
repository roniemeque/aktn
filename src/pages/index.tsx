import { Title1 } from "../styles/Titles";
import { GetServerSideProps } from "next";
import { API_URL } from "../settings";
import React, { FC } from "react";
import CategoryWithBooks from "../components/books/CategoryWithBooks";
import { sortBooksIntoCategories } from "../helpers/books";

interface Props {
  books: Book[];
}

const Home: FC<Props> = ({ books }) => {
  const booksByCategory = sortBooksIntoCategories(books);

  return (
    <>
      <Title1>Livros</Title1>
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
