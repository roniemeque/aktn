import React, { FC } from "react";
import BooksCardList from "./BooksCardList";
import { Title2 } from "../../styles/Titles";
import styled from "../../styles/styled";

interface Props {
  categoryGroup: CategoryWithBooks;
}

const CategoryWithBooks: FC<Props> = ({ categoryGroup }) => {
  return (
    <div className="gap-in-full">
      <CapitalizedTitle className="fixed-padding">
        {categoryGroup.title}
      </CapitalizedTitle>
      <BooksCardList books={categoryGroup.books}></BooksCardList>
    </div>
  );
};

const CapitalizedTitle = styled(Title2)`
  text-transform: capitalize;
`;

export default CategoryWithBooks;
