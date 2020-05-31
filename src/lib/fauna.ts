import faunadb, { query as q } from "faunadb";

const client = new faunadb.Client({
  secret: process.env.FAUNA_KEY,
});

interface FaunaItem {
  ref: {
    value: {
      id: string;
    };
  };
  data: {
    [key: string]: any;
  };
}

export const allItemsByIndex = async (indexName: string): Promise<any[]> => {
  const { data } = await client.query(
    q.Map(
      q.Paginate(q.Match(q.Index(indexName))),
      q.Lambda("X", q.Get(q.Var("X")))
    )
  );

  return data.map((item: FaunaItem) => ({
    id: item.ref.value.id,
    ...item.data,
  }));
};
