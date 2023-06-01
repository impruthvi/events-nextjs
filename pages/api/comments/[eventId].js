const handler = (req, res) => {
  const { eventId } = req.query;
  const { comment } = req.body;
  if (req.method === "POST") {
    const newComment = {
      id: new Date().toISOString(),
      comment,
    };
    console.log(newComment);
    res.status(201).json({ message: "Added comment.", comment: newComment });
  } else if (req.method === "GET") {
    const dummyList = [
      { id: "c1", name: "Max", text: "A first comment!"},
      { id: "c2", name: "Manuel", text: "A second comment!"},
    ];
    res.status(200).json({ comments: dummyList });
  }
};

export default handler;