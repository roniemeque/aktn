import { GetServerSideProps } from "next";
import React, { FC } from "react";
import BookInfo from "../../components/books/BookInfo";
import { API_URL } from "../../settings";
import BookRatings from "../../components/books/BookRatings";

interface Props {
  book: Book;
}

const Home: FC<Props> = ({ book }) => {
  return (
    <>
      <BookInfo book={book}></BookInfo>
      <BookRatings book={book}></BookRatings>
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
