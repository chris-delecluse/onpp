import express, { Express }                    from "express";
import dotenv                                  from "dotenv";
import cors                                    from "cors";
import { QuestionController }                  from "controller/QuestionController";
import { QuestionService }                     from "services/QuestionService";
import { SqlClient }                           from "config/SqlClient";
import { QuestionDescriptionItemService }      from "services/QuestionDescriptionItemService";
import { QuestionAnswerItemService }           from "services/QuestionAnswerItemService";
import { QuestionDescriptionItemImageService } from "services/QuestionDescriptionItemImageService";
import { QuestionDescriptionItemTextService }  from "services/QuestionDescriptionItemTextService";
import { QuestionSolutionService }             from "services/QuestionSolutionService";
import { UserAnswerService }                   from "services/UserAnswerService";
import { UserAnswerResultService }             from "services/UserAnswerResultService";
import { MikroORM, RequestContext }            from "@mikro-orm/core";
import { PostgreSqlDriver }                    from "@mikro-orm/postgresql";

dotenv.config();

const app: Express = express();
const port         = process.env.PORT;

const main = async () => {
    const orm = await MikroORM.init<PostgreSqlDriver>();
    await orm.getSchemaGenerator().updateSchema({wrap: false});

    const sqlClient = new SqlClient(
        process.env.DB_HOST || "",
        parseInt(process.env.DB_PORT || ""),
        process.env.DB_USER || "",
        process.env.DB_NAME || "",
        process.env.DB_PASSWORD || ""
    );

    const questionService                     = new QuestionService(sqlClient, orm);
    const questionDescriptionItemService      = new QuestionDescriptionItemService(sqlClient, orm);
    const questionAnswerItemService           = new QuestionAnswerItemService(sqlClient, orm);
    const questionDescriptionItemImageService = new QuestionDescriptionItemImageService(sqlClient, orm);
    const questionDescriptionItemTextService  = new QuestionDescriptionItemTextService(sqlClient, orm);
    const questionSolutionService             = new QuestionSolutionService(sqlClient, orm);
    const userAnswerService                   = new UserAnswerService(sqlClient, orm);
    const userAnswerResultService             = new UserAnswerResultService(sqlClient, orm);

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

    app.use((req, res, next) => {
        RequestContext.create(orm.em, next);
    });

    app.use(cors());
    app.use(express.json());

    app.get("/question", async (req, res) =>
        questionController.getAllQuestions(req, res)
    );

    app.get("/question/:id", async (req, res) =>
        questionController.getQuestionById(req, res, parseInt(req.params.id))
    );

    app.get("/question/description/item", async (req, res) =>
        questionController.getAllDescriptionItems(req, res)
    );

    app.get("/question/answer/item", async (req, res) =>
        questionController.getAllAnswerItems(req, res)
    );

    app.get("/question/description/item/image", async (req, res) =>
        questionController.getAllDescriptionItemImages(req, res)
    );

    app.get("/question/description/item/text", async (req, res) =>
        questionController.getAllDescriptionItemTexts(req, res)
    );

    app.get("/question/solution", async (req, res) =>
        questionController.getAllQuestionSolutions(req, res)
    );

    app.get("/user/answer", async (req, res) =>
        questionController.getAllUserAnswers(req, res)
    );

    app.get("/user/answer/result", async (req, res) =>
        questionController.getAllAnswerResults(req, res)
    );

    app.listen(port, () => {
        console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
};

main()
    .then(() => console.log("finished"));


