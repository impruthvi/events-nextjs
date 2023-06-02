import { connectDatabase, insertDocument } from "../../helpers/db-util";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email } = req.body;
    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid email address" });
      return;
    }
    let client;
    try {
      client = await connectDatabase();
      insertDocument(client, "newsletter", { email });
      // client.close();
      res.status(201).json({ message: "Signed up!" });
    } catch (error) {
      res.status(500).json({ message: "Connecting to the database failed!" });
      return;
    }
  }
};

export default handler;
