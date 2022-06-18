import { QuestionService } from "services/QuestionService";
import { SqlClient }       from "config/SqlClient";
import { Question }        from "model/Question";

const sqlClient = new SqlClient(
    process.env.DB_HOST || "",
    parseInt(process.env.DB_PORT || ""),
    process.env.DB_USER || "",
    process.env.DB_NAME || "",
    process.env.DB_PASSWORD || ""
);

describe("getting all questions should return all questions", async () => {
    const arr: Question[] = [
        new Question(1, "cc ca va ?")
    ];
    const questionService = new QuestionService(sqlClient);
    const result          = await questionService.getAll();

    expect(result)
        .toBe(arr);
});