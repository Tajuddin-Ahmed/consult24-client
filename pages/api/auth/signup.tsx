// import { hashPassword } from "../../../lib/auth";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const { fullname, email, password } = data;
    if (
      !fullname ||
      !email ||
      !email.includes("@") ||
      !password ||
      password.trim().length < 8
    ) {
      res.status(422).json({
        message:
          "Invalid input password should also be at least 8 characters long",
      });
      return;
    }
    // const client = await connectToDatabase();
    // const db = client.db();
    // const existingUser = db.collection("users").findOne({ email: email });
    // if (existingUser) {
    //   res.status(422).send({ message: "User exists already" });
    //   client.close();
    //   return;
    // }
    // const hashedPassword = await hashPassword(password);
    // db.collection("users").insertOne({
    //   fullname: fullname,
    //   email: email,
    //   password: hashedPassword,
    // });
    res.status(201).json({ message: "Created User !" });
  }
}
export default handler;
