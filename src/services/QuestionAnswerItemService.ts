import { IService } from "services/IService";
import { SqlClient } from "config/SqlClient";
import { QuestionAnswerItem } from "entities/QuestionAnswerItem";
import { AppDataSource } from "data-source";

export class QuestionAnswerItemService implements IService {
    sqlClient: SqlClient;

    async getAll(): Promise<QuestionAnswerItem[]> {
        return await AppDataSource.getRepository(QuestionAnswerItem).find()
    }

    constructor(sqlClient: SqlClient) {
        this.sqlClient = sqlClient;
    }
}