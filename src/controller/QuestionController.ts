import { Request, Response }                   from "express";
import { QuestionService }                     from "services/QuestionService";
import { QuestionDescriptionItemService }      from "services/QuestionDescriptionItemService";
import { QuestionAnswerItemService }           from "services/QuestionAnswerItemService";
import { QuestionDescriptionItemImageService } from "services/QuestionDescriptionItemImageService";
import { QuestionDescriptionItemTextService }  from "services/QuestionDescriptionItemTextService";
import { QuestionSolutionService }             from "services/QuestionSolutionService";
import { UserAnswerService }                   from "services/UserAnswerService";
import { UserAnswerResultService }             from "services/UserAnswerResultService";

class QuestionController {
    private service: QuestionService;
    private questionDescriptionItemService: QuestionDescriptionItemService;
    private questionAnswerItemService: QuestionAnswerItemService;
    private questionDescriptionItemImageService: QuestionDescriptionItemImageService;
    private questionDescriptionItemTextService: QuestionDescriptionItemTextService;
    private questionSolutionService: QuestionSolutionService;
    private userAnswerService: UserAnswerService;
    private userAnswerResultService: UserAnswerResultService;

    constructor(
        service: QuestionService,
        questionDescriptionItemService: QuestionDescriptionItemService,
        questionAnswerItemService: QuestionAnswerItemService,
        questionDescriptionItemImageService: QuestionDescriptionItemImageService,
        questionDescriptionItemTextService: QuestionDescriptionItemTextService,
        questionSolutionService: QuestionSolutionService,
        userAnswerService: UserAnswerService,
        userAnswerResultService: UserAnswerResultService
    ) {
        this.service                             = service;
        this.questionDescriptionItemService      = questionDescriptionItemService;
        this.questionAnswerItemService           = questionAnswerItemService;
        this.questionDescriptionItemImageService = questionDescriptionItemImageService;
        this.questionDescriptionItemTextService  = questionDescriptionItemTextService;
        this.questionSolutionService             = questionSolutionService;
        this.userAnswerService                   = userAnswerService;
        this.userAnswerResultService             = userAnswerResultService;
    }

    async getAllQuestions(req: Request, res: Response) {
        const result = await this.service.getAll();
        return res
            .status(200)
            .json(result);
    }

    async getQuestionById(req: Request, res: Response, id: number) {
        const result = await this.service.getOne(id);
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

    async getAllDescriptionItemImages(req: Request, res: Response) {
        const result = await this.questionDescriptionItemImageService.getAll();
        return res
            .status(200)
            .json(result);
    }

    async getAllDescriptionItemTexts(req: Request, res: Response) {
        const result = await this.questionDescriptionItemTextService.getAll();
        return res
            .status(200)
            .json(result);
    }

    async getAllQuestionSolutions(req: Request, res: Response) {
        const result = await this.questionSolutionService.getAll();
        return res
            .status(200)
            .json(result);
    }

    async getAllUserAnswers(req: Request, res: Response) {
        const result = await this.userAnswerService.getAll();
        return res
            .status(200)
            .json(result);
    }

    async getAllAnswerResults(req: Request, res: Response) {
        const result = await this.userAnswerResultService.getAll();
        return res
            .status(200)
            .json(result);
    }

    async getAnswerByUserId(req: Request, res: Response, id: number) {
        const result = await this.userAnswerResultService.getOne(id);
        return res
            .status(200)
            .json(result);
    }
}

export { QuestionController };