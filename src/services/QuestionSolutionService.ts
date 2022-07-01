import { IService } from "services/IService";
import { QuestionSolution } from "entities/QuestionSolution";
import { AppDataSource } from "data-source";

export class QuestionSolutionService implements IService {
    async getAll(): Promise<QuestionSolution[]> {
        return await AppDataSource.getRepository(QuestionSolution).find();
    }
}