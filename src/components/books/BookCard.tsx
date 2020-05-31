import React, { FunctionComponent } from "react";
import styled from "../../styles/styled";
import Link from "next/link";
import { Title3 } from "../../styles/Titles";

interface Props {
  book: Book;
}

const BookCard: FunctionComponent<Props> = ({ book }) => {
  return (
    <Link href="/books/[bookId]" as={`/books/${book.id}`}>
      <Card title={book.title}>
        <div className="top">
          <img src={book.thumb} alt={book.title} />
        </div>
        <div className="body">
          <span className="category">{book.category}</span>
          <Title3>{book.title}</Title3>
        </div>
      </Card>
    </Link>
  );
};

const Card = styled.a`
  display: inline-block;
  overflow: hidden;
  max-width: 12rem;
  width: 100%;
  cursor: pointer;
  color: inherit;
  .top {
    position: relative;
    height: 8rem;
    background: ${({ theme }) => theme.colors.greyEvenDarker};
    border-radius: ${({ theme }) => theme.border.small};
    img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      object-fit: cover;
    }
  }
  .body {
    padding: 0.5rem;
    display: grid;
    gap: 0.2rem;
  }
  .category {
    font-size: 0.9rem;
  }
`;

export default BookCard;
