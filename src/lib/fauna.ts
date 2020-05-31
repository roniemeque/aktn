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

export const allItemsByIndex = async (
  indexName: string
): Promise<any[] | null> => {
  try {
    const { data } = await client.query(
      q.Map(
        q.Paginate(q.Match(q.Index(indexName))),
        q.Lambda("X", q.Get(q.Var("X")))
      )
    );

    return data?.map((item: FaunaItem) => ({
      id: item?.ref?.value?.id,
      ...item?.data,
    }));
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getItemById = async (
  collectionName: string,
  id: string
): Promise<any> => {
  try {
    console.log(collectionName, id);

    const { ref, data }: FaunaItem = await client.query(
      q.Get(q.Ref(q.Collection(collectionName), id))
    );

    return {
      id: ref?.value?.id,
      ...data,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const createItem = async (
  collectionName: string,
  item: any
): Promise<string | null> => {
  try {
    const { ref } = await client.query(
      q.Create(q.Collection(collectionName), {
        data: { ...item },
      })
    );

    return ref?.value?.id;
  } catch (error) {
    console.error(error);
    return null;
  }
};
