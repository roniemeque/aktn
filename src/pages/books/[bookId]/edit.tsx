import { GetServerSideProps } from "next";
import React, { FC } from "react";
import ManageBooksForm from "../../../components/books/ManageBooksForm";
import { fetchBook } from "../../../helpers/books";
import { Title1 } from "../../../styles/Titles";

interface Props {
  book: Book;
}

const EditBookPage: FC<Props> = ({ book }) => {
  return (
    <>
      <Title1>Editar livro</Title1>
      <ManageBooksForm book={book}></ManageBooksForm>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { bookId } = context.params;

  const book = await fetchBook(bookId as string);
  return {
    props: {
      book,
    },
  };
};

export default EditBookPage;
