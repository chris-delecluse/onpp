import { QuestionService } from "services/QuestionService";
import { AsyncRouter }     from "express-async-router";

const QuestionController = AsyncRouter();
const service            = new QuestionService();

QuestionController.get("/", async (req, res) => {
    const result = await service.getAll();
    res.send(result);
});

export { QuestionController };