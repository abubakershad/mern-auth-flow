import express from "express";
import dotenv from "dotenv";
import connecdb from "./config/db.js";
import cors from "cors"
import authRouter from "./routes/auth.routes.js";
dotenv.config();

import dns, { setServers } from "node:dns";
import { setDefaultResultOrder } from "node:dns/promises";
import cookieParser from "cookie-parser";
setDefaultResultOrder("ipv4first");
setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();
const Port = process.env.PORT || 5000;

app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}))
app.use("/api/auth", authRouter)

app.listen(Port, () => {
  connecdb();
  console.log("Server started at", Port);
});
