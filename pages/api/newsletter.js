import { MongoClient } from "mongodb";

const handler = (req, res) => {
  if (req.method === "POST") {
    const { email } = req.body;
    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid email address" });
      return;
    }

    // Store it in a database
    const client = MongoClient.connect(process.env.NEXT_PUBLIC_MONGO_LOCAL_URL)
      .then((client) => {
        const db = client.db();

        db.collection("emails").insertOne({ email: email });


        res.status(201).json({ message: "Signed up!" });
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  }
};

export default handler;
