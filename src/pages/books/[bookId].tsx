import { GetServerSideProps } from "next";
import React, { FC } from "react";
import { API_URL } from "../../settings";
import { Title1 } from "../../styles/Titles";

interface Props {
  book: Book;
}

const Home: FC<Props> = ({ book }) => {
  console.log(book);

  return (
    <>
      <Title1>book</Title1>
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
