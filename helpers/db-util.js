import { MongoClient } from "mongodb";
const connectDatabase = async () => {
  const client = await MongoClient.connect(
    process.env.NEXT_PUBLIC_MONGO_LOCAL_URL
  );
  return client;
};

const insertDocument = async (client, collection, document) => {
  const db = client.db();
  await db.collection(collection).insertOne(document);
};

const getDocuments = async (client, collection, sort) => {
  const db = client.db();
  const documents = await db.collection(collection).find().sort(sort).toArray();
  return documents;
};

export { connectDatabase, insertDocument, getDocuments };