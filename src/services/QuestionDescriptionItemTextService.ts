import { IService } from "services/IService";
import { SqlClient } from "config/SqlClient";
import { QuestionDescriptionItem } from "entities/QuestionDescriptionItem";

export class QuestionDescriptionItemTextService implements IService {
    sqlClient: SqlClient;

    async getAll(): Promise<QuestionDescriptionItem[]> {

        return [];
    }

    constructor(sqlClient: SqlClient) {
        this.sqlClient = sqlClient;
    }

}