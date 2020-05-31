import React, { FC } from "react";
import BooksCardList from "./BooksCardList";
import { Title2 } from "../../styles/Titles";

interface Props {
  categoryGroup: CategoryWithBooks;
}

const CategoryWithBooks: FC<Props> = ({ categoryGroup }) => {
  return (
    <div className="gap-in-full">
      <Title2 className="fixed-padding">{categoryGroup.title}</Title2>
      <BooksCardList books={categoryGroup.books}></BooksCardList>
    </div>
  );
};

export default CategoryWithBooks;
