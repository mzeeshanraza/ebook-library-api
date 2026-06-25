import express from "express";
import createHttpError from "http-errors";
import globalErrorHandler from "./middlewares/globalErrorHandler.js";
// import userRouter from "./user/userRouter";

const app = express();

app.get("/", (req, res) => {
  //   throw new Error("something went wrong");
  const error = createHttpError(400, "something went wrong");
  throw error;
  res.json({ message: "Welcome to elibs apis" });
});

// app.use("/api/users", userRouter);
// Global error Handler
app.use(globalErrorHandler);

export default app;
