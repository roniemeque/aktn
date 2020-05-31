import { NextApiRequest, NextApiResponse } from "next";
import { allItemsByIndex } from "../../../lib/fauna";

type Data = {
  books: Book[];
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  switch (req.method) {
    case "GET":
      const books = await allItemsByIndex("all_books");
      return res.status(200).json({ books });

    default:
      break;
  }

  res.status(200).json({ books: [] });
};
