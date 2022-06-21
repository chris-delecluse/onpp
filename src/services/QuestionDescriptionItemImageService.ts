import { IService } from "services/IService";
import { SqlClient } from "config/SqlClient";
import { QuestionDescriptionItemImage } from "entities/QuestionDescriptionItemImage";

export class QuestionDescriptionItemImageService implements IService {
    sqlClient: SqlClient;

    async getAll(): Promise<QuestionDescriptionItemImage[]> {

        return [];
    }

    constructor(sqlClient: SqlClient) {
        this.sqlClient = sqlClient;
    }

}