import React, { FC } from "react";
import { Title1 } from "../../styles/Titles";
import styled from "../../styles/styled";

interface Props {
  book: Book;
}

const BookInfo: FC<Props> = ({ book }) => {
  return (
    <BookInfoStyled>
      <div className="image">
        <img src="" alt={book.title} />
      </div>
      <span>{book.category}</span>
      <Title1>{book.title}</Title1>
    </BookInfoStyled>
  );
};

const BookInfoStyled = styled.div`
  display: grid;
  grid-template-columns: 5rem 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "thumb title"
    "thumb category";
  column-gap: 1rem;
  .image {
    grid-area: thumb;
    height: 5rem;
    width: 5rem;
    position: relative;
    background: ${({ theme }) => theme.colors.greyEvenDarker};
    border-radius: 50%;
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
  span {
    grid-area: category;
  }
  h1 {
    grid-area: title;
  }
`;

export default BookInfo;
