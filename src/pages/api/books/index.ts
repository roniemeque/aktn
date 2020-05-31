import { NextApiRequest, NextApiResponse } from "next";
import { allItemsByIndex, createItem } from "../../../lib/fauna";

type Data = {
  books?: Book[];
  createdId?: string;
  message?: string;
};

export default async (
  { method, body }: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  if (method === "GET") {
    const books = await allItemsByIndex("all_books");

    if (!books)
      return res.status(500).json({ message: "Something went wrong" });

    return res.status(200).json({ books });
  }

  if (method === "POST") {
    const createdId = await createItem("books", body);

    if (!createdId)
      return res.status(500).json({ message: "Something went wrong" });

    return res.status(200).json({ createdId });
  }

  res.status(405).json({ message: "Method not available" });
};
