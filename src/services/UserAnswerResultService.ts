import { IService } from "services/IService";
import { UserAnswerResult } from "entities/UserAnswerResult";
import { AppDataSource } from "data-source";

export class UserAnswerResultService implements IService {
    async getAll(): Promise<UserAnswerResult[]> {
        return await AppDataSource.getRepository(UserAnswerResult).find();
    }
}