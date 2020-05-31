import React, { FC } from "react";
import styled from "../../styles/styled";
import BookCard from "./BookCard";

interface Props {
  books: Book[];
}

const BooksCardList: FC<Props> = ({ books }) => {
  return (
    <List>
      {books.map((book) => (
        <li key={book.id}>
          <BookCard book={book}></BookCard>
        </li>
      ))}
    </List>
  );
};

const List = styled.ul`
  display: grid;
  grid-template-columns: ${(p) => p.theme.gutter};
  grid-auto-flow: column;
  justify-content: flex-start;
  grid-auto-columns: calc(300px - ${(p) => p.theme.gutter} * 2);
  overflow-x: scroll;
  scroll-snap-type: x proximity;
  gap: ${(p) => p.theme.gutter};
  max-width: 100vw;
  &::before,
  &::after {
    content: "";
    width: ${(p) => p.theme.gutter};
  }
  padding: 0.4rem 0 1rem;
  @media (min-width: 900px) {
    grid-template-columns: repeat(
      auto-fit,
      calc(300px - ${(p) => p.theme.gutter} * 2)
    );
    grid-auto-flow: initial;
    padding: 1rem;
    gap: 2rem;
    max-width: initial;
    &::before,
    &::after {
      display: none;
    }
  }
`;

export default BooksCardList;
