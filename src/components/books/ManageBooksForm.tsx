import React, { FC, useState, FormEvent } from "react";
import TextInput from "../app/TextInput";
import TextAreaInput from "../app/TextAreaInput";
import styled from "../../styles/styled";
import { Title3 } from "../../styles/Titles";
import { Button } from "../../styles/Button";
import { mutateBook } from "../../helpers/books";
import { useRouter } from "next/router";

interface Props {
  book?: Book;
}

const ManageBooksForm: FC<Props> = ({ book }) => {
  const [title, setTitle] = useState(book?.title || "");
  const [shortDesc, setShortDesc] = useState(book?.shortDesc || "");
  const [thumb, setThumb] = useState(book?.thumb || "");
  const [category, setCategory] = useState(book?.category || "");
  const [sending, setSending] = useState(false);

  const router = useRouter();

  const onMutateBook = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);

    await mutateBook("POST", {
      title,
      shortDesc,
      thumb,
      category,
    });

    setSending(false);
    router.push("/");
  };

  return (
    <Form data-testid="managing-books-form" onSubmit={onMutateBook}>
      <TextInput
        name="title"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
        label="Título"
        placeHolder="Game of Thrones"
      ></TextInput>
      <TextAreaInput
        name="shortDesc"
        value={shortDesc}
        onChange={(e) => setShortDesc(e.currentTarget.value)}
        label="Sinopse"
        placeHolder="Um livro muito interessante sobre fantasia medieval"
      ></TextAreaInput>
      <TextInput
        name="category"
        value={category}
        onChange={(e) => setCategory(e.currentTarget.value)}
        label="Gênero"
        placeHolder="Drama"
      ></TextInput>
      <TextInput
        name="thumb"
        value={thumb}
        onChange={(e) => setThumb(e.currentTarget.value)}
        label="Imagem URL"
        placeHolder="https://m.media-amazon.com/images/I/51D+-f5UcDL._SY346_.jpg"
      ></TextInput>
      <SendButton disabled={sending}>
        {book
          ? sending
            ? "editando..."
            : "editar"
          : sending
          ? "criando"
          : "criar"}
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

export default ManageBooksForm;
