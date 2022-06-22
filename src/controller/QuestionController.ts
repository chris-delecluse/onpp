import { Request, Response } from "express";
import { QuestionService } from "services/QuestionService";
import { QuestionDescriptionItemService } from "services/QuestionDescriptionItemService";
import { QuestionAnswerItemService } from "services/QuestionAnswerItemService";
import { QuestionDescriptionItemImageService } from "services/QuestionDescriptionItemImageService";
import { QuestionDescriptionItemTextService } from "services/QuestionDescriptionItemTextService";
import { QuestionSolutionService } from "services/QuestionSolutionService";
import { UserAnswerService } from "services/UserAnswerService";
import { UserAnswerResultService } from "services/UserAnswerResultService";
import { AnswerIndex } from "entities/AnswerIndex";

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
        try {
            const result = await this.service.getOne(id);
            return res
                .status(200)
                .json(result);
        } catch (error) {
            console.log(error);
            return res
                .status(404)
                .json({message: `Error: cannot get this question with id ${id}`});
        }
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

    async getDescriptionItemImageById(req: Request, res: Response, id: number) {
        try {
            const result = await this.questionDescriptionItemImageService.getOne(id);
            return res
                .status(200)
                .json(result);
        } catch (error) {
            console.log(error);
            return res
                .status(404)
                .json({message: `Error: cannot get this image with id ${id}`});
        }
    }

    async getAllDescriptionItemTexts(req: Request, res: Response) {
        const result = await this.questionDescriptionItemTextService.getAll();
        return res
            .status(200)
            .json(result);
    }

    async getDescriptionItemTextById(req: Request, res: Response, id: number) {
        try {
            const result = await this.questionDescriptionItemTextService.getOne(id);
            return res
                .status(200)
                .json(result);
        } catch (error) {
            console.log(error);
            return res
                .status(404)
                .json({message: `Error: cannot get this text with id ${id}`});
        }
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

    async postUserAnswer(req: Request, res: Response) {
        switch (req.body.answerIndex) {
            case "1":
                await this.userAnswerService.post(req.body.questionId, AnswerIndex.First, req.body.username);
                break;
            case "2":
                await this.userAnswerService.post(req.body.questionId, AnswerIndex.Second, req.body.username);
                break;
            case "3":
                await this.userAnswerService.post(req.body.questionId, AnswerIndex.Third, req.body.username);
                break;
            case "4":
                await this.userAnswerService.post(req.body.questionId, AnswerIndex.Fourth, req.body.username);
                break;
            default:
                return res
                    .status(400)
                    .json({
                        message: "Error: invalid data. Check if the question, answer index and username is correct"
                    });
        }
        return res
            .status(201)
            .json({message: "Success: ser answer send successfully"});
    }

    async getAllAnswerResults(req: Request, res: Response) {
        const result = await this.userAnswerResultService.getAll();
        return res
            .status(200)
            .json(result);
    }
}

export { QuestionController };
