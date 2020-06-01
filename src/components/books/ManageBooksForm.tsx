import { useRouter } from "next/router";
import React, { FC, FormEvent, useState } from "react";
import { mutateBook } from "../../helpers/books";
import { Button } from "../../styles/Button";
import styled from "../../styles/styled";
import TextAreaInput from "../app/TextAreaInput";
import TextInput from "../app/TextInput";

interface Props {
  book?: Book;
}

const ManageBooksForm: FC<Props> = ({ book }) => {
  const [title, setTitle] = useState(book?.title || "");
  const [shortDesc, setShortDesc] = useState(book?.shortDesc || "");
  const [thumb, setThumb] = useState(book?.thumb || "");
  const [category, setCategory] = useState(book?.category || "");
  const [sending, setSending] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);

  const router = useRouter();

  const onImageUpload = async (e: any) => {
    setUploadingImage(true);
    try {
      const files = e.target.files;
      const data = new FormData();
      data.append("file", files[0]);
      data.append("upload_preset", "sickfits");

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/roniemeque/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const { secure_url } = await res.json();
      setThumb(secure_url || "");
    } catch (error) {
      console.error(error);
    }
    setUploadingImage(false);
  };

  const onMutateBook = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);

    await mutateBook(
      book ? "PUT" : "POST",
      {
        title,
        shortDesc,
        thumb,
        category,
      },
      book?.id
    );

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
      <ThumbPicker>
        <label htmlFor="thumb-upload">Imagem</label>
        <input
          type="file"
          id="thumb-upload"
          name="thumb-upload"
          placeholder="Upload an image"
          onChange={onImageUpload}
        />
        {uploadingImage && <span>enviando...</span>}
        {thumb && <img src={thumb} alt="Imagem escolhida" />}
      </ThumbPicker>
      <SendButton disabled={sending || uploadingImage}>
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

const RemoveButton = styled(SendButton)`
  background: ${({ theme }) => theme.colors.purple};
`;

const ThumbPicker = styled.div`
  display: grid;
  img {
    margin-top: 0.5rem;
    width: 5rem;
    height: 5rem;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.border.small};
  }
`;

export default ManageBooksForm;
