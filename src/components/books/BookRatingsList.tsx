import React, { FC } from "react";
import styled from "../../styles/styled";
import { Title2 } from "../../styles/Titles";

interface Props {
  book?: Book;
  ratings?: Rating[];
}

const BookRatingsList: FC<Props> = ({ book, ratings }) => {
  return (
    <BookRatingsListStyled>
      {ratings?.length ? (
        <ul>
          {ratings.map((rating) => (
            <li key={rating.text}>
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
    </BookRatingsListStyled>
  );
};

const BookRatingsListStyled = styled.div`
  li {
    &:not(:first-of-type) {
      margin-top: 0.5rem;
      padding-top: 0.5rem;
      border-top: 1px solid ${({ theme }) => theme.colors.grey};
    }
  }
`;

export default BookRatingsList;
