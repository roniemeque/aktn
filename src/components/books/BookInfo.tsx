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
        <img src={book.thumb} alt={book.title} />
      </div>
      <span>{book.category}</span>
      <Title1>{book.title}</Title1>
      <p>{book.shortDesc}</p>
    </BookInfoStyled>
  );
};

const BookInfoStyled = styled.div`
  display: grid;
  grid-template-columns: 5rem 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "thumb ."
    "title title"
    "category ."
    "desc desc";
  column-gap: 1rem;
  row-gap: 0.4rem;
  @media (min-width: 900px) {
    grid-template-areas:
      "thumb title"
      "thumb category"
      "desc desc";
  }
  .image {
    grid-area: thumb;
    height: 5rem;
    width: 5rem;
    position: relative;
    background: ${({ theme }) => theme.colors.greyEvenDarker};
    border-radius: 50%;
    overflow: hidden;
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
  p {
    grid-area: desc;
  }
`;

export default BookInfo;
