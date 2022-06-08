import "reflect-metadata";

import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";

import { router } from "./routes";

import "./container";
import { AppError } from "./errors/AppError";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({ message: err.message });
    }
    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.listen(PORT, () =>
  console.log(`microservices auth-api running at ${PORT}`)
);
