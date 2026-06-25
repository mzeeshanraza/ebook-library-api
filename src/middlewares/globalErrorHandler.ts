import { Request, Response } from "express";
import { HttpError } from "http-errors";
import { config } from "../config/config.js";

// Global error Handler
const globalErrorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  // _next: NextFunction
) => {
  const statusCode = err.statusCode || 500;

  return res.status(statusCode).json({
    message: err.message,
    errorStack: config.env === "development" ? err.stack : "", 
    // err.stack => Use this during development to view detailed debugging information. It should be disabled in production to prevent exposing sensitive data.
  });
};

export default globalErrorHandler;
