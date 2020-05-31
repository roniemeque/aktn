import React, { FC } from "react";
import styled from "../../styles/styled";
import { Title2 } from "../../styles/Titles";

interface Props {
  book: Book;
}

const BookRatings: FC<Props> = ({ book }) => {
  return (
    <BookRatingsStyled>
      <Title2>Opiniões</Title2>
      {book?.ratings?.length ? (
        <ul>
          {book?.ratings.map((rating) => (
            <li key={rating.name}>
              <p>
                <strong>{rating.name}</strong>
              </p>
              <p>{rating.text}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Sem opiniões</p>
      )}
    </BookRatingsStyled>
  );
};

const BookRatingsStyled = styled.div``;

export default BookRatings;
