import { GetServerSideProps } from "next";
import React, { FC, useState } from "react";
import AddBookRating from "../../components/books/AddBookRating";
import BookInfo from "../../components/books/BookInfo";
import BookRatingsList from "../../components/books/BookRatingsList";
import { fetchBook } from "../../helpers/books";
import { Title2 } from "../../styles/Titles";

interface Props {
  book: Book;
}

const Home: FC<Props> = ({ book: bookFromServer }) => {
  const [book, setBook] = useState(bookFromServer);

  const updateBook = async () => {
    const updatedBook = await fetchBook(book.id);
    if (updateBook) {
      setBook(updatedBook);
    }
  };

  return (
    <>
      <BookInfo book={book}></BookInfo>
      <Title2>Opiniões</Title2>
      <AddBookRating refreshBookData={updateBook} book={book}></AddBookRating>
      <BookRatingsList ratings={book.ratings}></BookRatingsList>
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

export default Home;
