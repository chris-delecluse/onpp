import express from "express";
import { QuestionController } from "controller/QuestionController";
import dotenv from "dotenv";
import cors from "cors";
import errorMiddleware from "middleware/error.middleware";
import { AppDataSource } from "data-source";
import { QuestionService } from "services/QuestionService";
import { QuestionDescriptionItemService } from "services/QuestionDescriptionItemService";
import { QuestionAnswerItemService } from "services/QuestionAnswerItemService";
import { QuestionDescriptionItemImageService } from "services/QuestionDescriptionItemImageService";
import { QuestionDescriptionItemTextService } from "services/QuestionDescriptionItemTextService";
import { QuestionSolutionService } from "services/QuestionSolutionService";
import { UserAnswerService } from "services/UserAnswerService";
import { UserAnswerResultService } from "services/UserAnswerResultService";
import { SqlClient } from "config/SqlClient";
import { InitDatabase } from "config/InitializeDatabase";

class App {
    public app: express.Application;

    constructor(controllers: QuestionController) {
        dotenv.config();

        this.app = express();
        this.connectToTheDatabase()
            .then(() => this.initializeMiddleware())
            .then(() => this.routes())
            .then(() => this.initializeErrorHandling())
            .then(() => this.listen());
    }

    public listen = () => {
        this.app.listen(process.env.PORT, () => {
            console.log(`App listening on: http://localhost:${process.env.PORT}`);
        });
    };

    private initializeMiddleware = () => {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({
            extended: false
        }));
    };

    private initializeErrorHandling = () => {
        this.app.use(errorMiddleware);
    };

    private connectToTheDatabase = async () => {
        await AppDataSource.initialize();
    };

    private initFakeDatabase = (dev: boolean) => {
        const initDb = new InitDatabase(dev);
    };

    private routes = async () => {
        this.app.get("/question", async (req, res) =>
            questionController.getAllQuestions(req, res)
        );

        this.app.get("/question/:id", async (req, res) =>
            questionController.getQuestionById(req, res, parseInt(req.params.id))
        );

        this.app.get("/question/description/item", async (req, res) =>
            questionController.getAllDescriptionItems(req, res)
        );

        this.app.get("/question/answer/item", async (req, res) =>
            questionController.getAllAnswerItems(req, res)
        );

        this.app.get("/question/description/item/image", async (req, res) =>
            questionController.getAllDescriptionItemImages(req, res)
        );

        this.app.get("/question/description/item/image/:id", async (req, res) =>
            questionController.getDescriptionItemImageById(req, res, parseInt(req.params.id))
        );

        this.app.get("/question/description/item/text", async (req, res) =>
            questionController.getAllDescriptionItemTexts(req, res)
        );

        this.app.get("/question/description/item/text/:id", async (req, res) =>
            questionController.getDescriptionItemTextById(req, res, parseInt(req.params.id))
        );

        this.app.get("/question/solution", async (req, res) =>
            questionController.getAllQuestionSolutions(req, res)
        );

        this.app.get("/user/answer", async (req, res) =>
            questionController.getAllUserAnswers(req, res)
        );

        this.app.post("/user/answer", async (req, res) =>
            questionController.postUserAnswer(req, res)
        );

        this.app.get("/user/answer/result", async (req, res) =>
            questionController.getAllAnswerResults(req, res)
        );
    };
}

const sqlClient = new SqlClient(
    process.env.DB_HOST || "",
    parseInt(process.env.DB_PORT || ""),
    process.env.DB_USER || "",
    process.env.DB_NAME || "",
    process.env.DB_PASSWORD || ""
);

const questionService                     = new QuestionService(sqlClient);
const questionDescriptionItemService      = new QuestionDescriptionItemService(sqlClient);
const questionAnswerItemService           = new QuestionAnswerItemService(sqlClient);
const questionDescriptionItemImageService = new QuestionDescriptionItemImageService(sqlClient);
const questionDescriptionItemTextService  = new QuestionDescriptionItemTextService(sqlClient);
const questionSolutionService             = new QuestionSolutionService(sqlClient);
const userAnswerService                   = new UserAnswerService(sqlClient);
const userAnswerResultService             = new UserAnswerResultService(sqlClient);

const questionController = new QuestionController(
    questionService,
    questionDescriptionItemService,
    questionAnswerItemService,
    questionDescriptionItemImageService,
    questionDescriptionItemTextService,
    questionSolutionService,
    userAnswerService,
    userAnswerResultService
);

const app = new App(questionController);
