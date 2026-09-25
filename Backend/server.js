import express from "express";
import router from "./routes/userRouter.js";
const app = express();

app.use(express.json());
app.use("/api/leetcode", router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});