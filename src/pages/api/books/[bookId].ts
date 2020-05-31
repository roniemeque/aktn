import { NextApiRequest, NextApiResponse } from "next";
import { allItemsByIndex, getItemById } from "../../../lib/fauna";

type Data = {
  book?: Book;
  message?: string;
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

  res.status(405).json({ message: "Method not available" });
};
