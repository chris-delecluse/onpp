import { IService } from "services/IService";
import { SqlClient } from "config/SqlClient";
import { UserAnswerResult } from "entities/UserAnswerResult";

export class UserAnswerResultService implements IService {
    sqlClient: SqlClient;

    async getAll(): Promise<UserAnswerResult[]> {

        return [];
    }

    constructor(sqlClient: SqlClient) {
        this.sqlClient = sqlClient;
    }

}