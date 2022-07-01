import { IService } from "services/IService";
import { QuestionDescriptionItem } from "entities/QuestionDescriptionItem";
import { AppDataSource } from "data-source";

export class QuestionDescriptionItemService implements IService {
    async getAll(): Promise<QuestionDescriptionItem[]> {
        return await AppDataSource.getRepository(QuestionDescriptionItem).find();
    }
}