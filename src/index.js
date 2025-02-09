import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cacheRouter from "./routes/cache.router.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use("/cache", cacheRouter);

app.use("*", (err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({ message: "Something went wrongg" });
});

const port = process.env.PORT || 4000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`server running on port:${port}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB conection FAILED!!", err);
  });
