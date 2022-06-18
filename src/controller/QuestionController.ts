import { Request, Response }              from "express";
import { QuestionService }                from "services/QuestionService";
import { QuestionDescriptionItemService } from "services/QuestionDescriptionItemService";
import { QuestionAnswerItemService }      from "services/QuestionAnswerItemService";

class QuestionController {
    private service: QuestionService;
    private questionDescriptionItemService: QuestionDescriptionItemService;
    private questionAnswerItemService: QuestionAnswerItemService;

    constructor(
        service: QuestionService,
        questionDescriptionItemService: QuestionDescriptionItemService,
        questionAnswerItemService: QuestionAnswerItemService
    ) {
        this.service                        = service;
        this.questionDescriptionItemService = questionDescriptionItemService;
        this.questionAnswerItemService      = questionAnswerItemService;
    }

    async getAllQuestions(req: Request, res: Response) {
        const result = await this.service.getAll();
        return res
            .status(200)
            .json(result);
    }

    async getAllDescriptionItems(req: Request, res: Response) {
        const result = await this.questionDescriptionItemService.getAll();
        return res
            .status(200)
            .json(result);
    }

    async getAllAnswerItems(req: Request, res: Response) {
        const result = await this.questionAnswerItemService.getAll();
        return res
            .status(200)
            .json(result);
    }
}

export { QuestionController };