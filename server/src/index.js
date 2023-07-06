import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import { userRouter } from "./routes/users.js";
const app = express();

app.use(express.json());
app.use(cors());
app.use("/auth", userRouter);
mongoose.connect(process.env.MONGOOSE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3001, () => console.log("Server started"));
