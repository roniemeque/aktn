import { NextApiRequest, NextApiResponse } from "next";
import { allItemsByIndex, getItemById, deleteById } from "../../../lib/fauna";

type Data = {
  book?: Book;
  message?: string;
  deletedId?: string;
};

export default async (
  { method, query }: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { bookId } = query;

  if (method === "GET") {
    const book = await getItemById("books", bookId as string);

    if (!book) return res.status(500).json({ message: "Something went wrong" });

    return res.status(200).json({ book });
  }

  if (method === "DELETE") {
    const deletedId = await deleteById("books", bookId as string);

    if (!deletedId)
      return res.status(500).json({ message: "Something went wrong" });

    return res.status(200).json({ deletedId });
  }

  res.status(405).json({ message: "Method not available" });
};
