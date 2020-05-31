import React, { FC, useState, FormEvent } from "react";
import TextInput from "../app/TextInput";
import TextAreaInput from "../app/TextAreaInput";
import styled from "../../styles/styled";
import { Title3 } from "../../styles/Titles";
import { Button } from "../../styles/Button";
import { mutateBook } from "../../helpers/books";

interface Props {
  book: Book;
  refreshBookData: () => void;
}

const AddBookRating: FC<Props> = ({ book, refreshBookData }) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [sending, setSending] = useState(false);

  const onSendRating = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);

    const ratingsUpdated = [
      ...(book?.ratings || []),
      {
        name,
        text,
      },
    ];
    try {
      await mutateBook(book.id, { ratings: ratingsUpdated });
      refreshBookData();
    } catch (error) {
      console.error(error);
    }
    setSending(false);
  };

  return (
    <Form onSubmit={onSendRating}>
      <Title3>Dê sua opinão</Title3>
      <TextInput
        name="name"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
        label="Seu nome"
        placeHolder="João da Silva"
      ></TextInput>
      <TextAreaInput
        name="text"
        value={text}
        onChange={(e) => setText(e.currentTarget.value)}
        label="O que achou do livro?"
        placeHolder="Muito bom"
      ></TextAreaInput>
      <SendButton disabled={sending}>
        {sending ? "enviando..." : "enviar"}
      </SendButton>
    </Form>
  );
};

const Form = styled.form`
  display: grid;
  gap: 0.5rem;
  justify-self: flex-start;
`;

const SendButton = styled(Button)`
  justify-self: flex-start;
`;

export default AddBookRating;
