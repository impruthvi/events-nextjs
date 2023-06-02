import {
  connectDatabase,
  insertDocument,
  getDocuments,
} from "../../../helpers/db-util";

const handler = async (req, res) => {
  const { eventId } = req.query;

  const { email, name, text } = req.body;

  if (req.method === "POST") {
    if (!text || text.trim() === "") {
      res.status(422).json({ message: "Invalid comment." });
      return;
    }

    // Store it in a database
    const newComment = { eventId, text, email, name };
    let client;
    try {
      client = await connectDatabase();
      await insertDocument(client, "comments", newComment);
      client.close();
      res.status(201).json({ message: "Added comment.", comment: newComment });
    } catch (error) {
      res.status(500).json({ message: "Inserting comment failed!" });
      return;
    }
  } else if (req.method === "GET") {
    let client;
    try {
      client = await connectDatabase();
      const documents = await getDocuments(client, "comments", { _id: -1 });
      client.close();
      res.status(200).json({ comments: documents });
    } catch (error) {
      res.status(500).json({ message: "Getting comments failed." });
    }
  }
};

export default handler;
