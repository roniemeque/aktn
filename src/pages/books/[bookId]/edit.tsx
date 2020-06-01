import { GetServerSideProps } from "next";
import React, { FC } from "react";
import ManageBooksForm from "../../../components/books/ManageBooksForm";
import { fetchBook, deleteBook } from "../../../helpers/books";
import { Title1, WithActionWrapper } from "../../../styles/Titles";
import { useRouter } from "next/router";

interface Props {
  book: Book;
}

const EditBookPage: FC<Props> = ({ book }) => {
  const router = useRouter();

  const onDeleteBook = async () => {
    if (window.confirm("Tem certeza que deseja apagar o livro?")) {
      await deleteBook(book.id);
      router.push("/");
    }
  };

  return (
    <>
      <WithActionWrapper content="-" actionColor="#FF4136">
        <Title1>Editar Livro</Title1>
        <span onClick={onDeleteBook} title="Apagar livro">
          <span></span> Apagar
        </span>
      </WithActionWrapper>
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
