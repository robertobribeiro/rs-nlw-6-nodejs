import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { router } from "./routes";
import "./database";

const port = 3000;
const badRequest = 400;
const internalServerError = 500;
const app = express();

app.use(express.json());
app.use(router);
app.use((error: Error, request: Request, response: Response, nf: NextFunction) => {
  if (error instanceof Error) {
    return response.status(badRequest).json({
      error: error.message
    });
  }
  return response.status(internalServerError).json({
    status: "error",
    message: "internal server error"
  });
});
app.listen(port, () => console.log("http server running - port 3000"));