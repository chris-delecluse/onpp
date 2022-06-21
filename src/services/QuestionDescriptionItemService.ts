import { IService } from "services/IService";
import { SqlClient } from "config/SqlClient";
import { QuestionDescriptionItem } from "entities/QuestionDescriptionItem";
import { AppDataSource } from "data-source";

export class QuestionDescriptionItemService implements IService {
    sqlClient: SqlClient;

    async getAll(): Promise<QuestionDescriptionItem[]> {
        return await AppDataSource.getRepository(QuestionDescriptionItem).find();
    }

    constructor(sqlClient: SqlClient) {
        this.sqlClient = sqlClient;
    }
}