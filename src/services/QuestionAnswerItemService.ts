import { IService } from "services/IService";
import { SqlClient } from "config/SqlClient";
import { QuestionAnswerItem } from "entities/QuestionAnswerItem";

export class QuestionAnswerItemService implements IService {
    sqlClient: SqlClient;

    async getAll(): Promise<QuestionAnswerItem[]> {


        return [];
    }

    constructor(sqlClient: SqlClient) {
        this.sqlClient = sqlClient;
    }
}