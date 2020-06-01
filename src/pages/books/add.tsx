import React, { FC } from "react";
import { Title1 } from "../../styles/Titles";
import ManageBooksForm from "../../components/books/ManageBooksForm";

const AddBookPage: FC = () => {
  return (
    <>
      <Title1>Adicionar livro</Title1>
      <ManageBooksForm></ManageBooksForm>
    </>
  );
};

export default AddBookPage;
