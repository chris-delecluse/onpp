import { QuestionService } from "services/QuestionService";
import { SqlClient }       from "config/SqlClient";
import { Question }        from "model/Question";
import dotenv              from "dotenv";

const sqlClient = new SqlClient(
    process.env.DB_HOST || "admin.squarecell.eu",
    parseInt(process.env.DB_PORT || "5432"),
    process.env.DB_USER || "onpp",
    process.env.DB_NAME || "onpp",
    process.env.DB_PASSWORD || "onppDiwa"
);

describe("getting all questions should return all questions", async () => {
    dotenv.config()

    const arr: Question[] = [
        new Question(1, "cc ca va ?")
    ];

    it("gets all questions in database", async () => {
        const questionService = new QuestionService(sqlClient);
        const result          = await questionService.getAll();

        expect(result)
            .toEqual(arr);
    });
});