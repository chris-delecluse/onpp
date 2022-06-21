import { IService } from "services/IService";
import { SqlClient } from "config/SqlClient";
import { UserAnswer } from "entities/UserAnswer";

export class UserAnswerService implements IService {
    sqlClient: SqlClient;

    async getAll(): Promise<UserAnswer[]> {

        return [];
    }

    constructor(sqlClient: SqlClient) {
        this.sqlClient = sqlClient;
    }

}