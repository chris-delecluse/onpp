import express, { Express }               from "express";
import dotenv                             from "dotenv";
import cors                               from "cors";
import { QuestionController }             from "controller/QuestionController";
import { QuestionService }                from "services/QuestionService";
import { SqlClient }                      from "config/SqlClient";
import { QuestionDescriptionItemService } from "services/QuestionDescriptionItemService";
import { QuestionAnswerItemService }      from "services/QuestionAnswerItemService";

dotenv.config();

const app: Express = express();
const port         = process.env.PORT;

const sqlClient = new SqlClient(
    process.env.DB_HOST || "",
    parseInt(process.env.DB_PORT || ""),
    process.env.DB_USER || "",
    process.env.DB_NAME || "",
    process.env.DB_PASSWORD || ""
);

const questionService                = new QuestionService(sqlClient);
const questionDescriptionItemService = new QuestionDescriptionItemService(sqlClient);
const questionAnswerItemService      = new QuestionAnswerItemService(sqlClient);

const questionController = new QuestionController(
    questionService,
    questionDescriptionItemService,
    questionAnswerItemService
);

app.use(cors());
app.use(express.json());

app.get("/question", async (req, res) =>
    questionController.getAllQuestions(req, res)
);

app.get("/question/description/item", async (req, res) =>
    questionController.getAllDescriptionItems(req, res)
);

app.get("/question/answer/item", async (req, res) =>
    questionController.getAllAnswerItems(req, res)
);

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

