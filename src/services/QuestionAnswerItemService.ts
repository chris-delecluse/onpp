import { IService } from "services/IService";
import { QuestionAnswerItem } from "entities/QuestionAnswerItem";
import { AppDataSource } from "data-source";

export class QuestionAnswerItemService implements IService {
    async getAll(): Promise<QuestionAnswerItem[]> {
        return await AppDataSource.getRepository(QuestionAnswerItem).find()
    }
}