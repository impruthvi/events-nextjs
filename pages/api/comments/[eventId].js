import { MongoClient } from "mongodb";

const handler = (req, res) => {
  const { eventId } = req.query;

  const { email, name, text } = req.body;

  if (req.method === "POST") {
    if (!text || text.trim() === "") {
      res.status(422).json({ message: "Invalid comment." });
      return;
    }

    // Store it in a database
    const newComment = { eventId, text, email, name };

    MongoClient.connect(process.env.NEXT_PUBLIC_MONGO_LOCAL_URL)
      .then((client) => {
        const db = client.db();

        db.collection("comments").insertOne(newComment);

        res
          .status(201)
          .json({ message: "Added comment.", comment: newComment });
        // client.close();
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  } else if (req.method === "GET") {
    MongoClient.connect(process.env.NEXT_PUBLIC_MONGO_LOCAL_URL)
      .then((client) => {
        const db = client.db();

        db.collection("comments")
          .find({ eventId: eventId })
          .sort({ _id: -1 })
          .toArray()
          .then((comments) => {
            res.status(200).json({ comments: comments });
          });
      })
      .catch((err) => console.log(err));
  }
};

export default handler;
