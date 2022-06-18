import express, { Express, Request, Response } from "express";
import dotenv                                  from "dotenv";
import cors                                    from "cors";
import { QuestionController }                  from "controller/QuestionController";

dotenv.config();

const app: Express = express();
const port         = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/question", QuestionController);

app.get("/",async (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
