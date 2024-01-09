import * as dotenv from "dotenv";
import express, { Application, Express, Request, Response } from "express";

dotenv.config();
const app: Application = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server yooboo');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});