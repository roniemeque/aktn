import { GetServerSideProps } from "next";
import React, { FC } from "react";
import { API_URL } from "../../settings";
import { Title1 } from "../../styles/Titles";
import BookInfo from "../../components/books/BookInfo";
import { books } from "../../mocks/books";

interface Props {
  book: Book;
}

const Home: FC<Props> = ({ book }) => {
  return (
    <>
      <BookInfo book={book}></BookInfo>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { bookId } = context.params;

  try {
    const { book } = await (await fetch(`${API_URL}/books/${bookId}`)).json();
    return {
      props: {
        book,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        book: null,
      },
    };
  }
};

export default Home;
