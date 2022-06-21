import { IService } from "services/IService";
import { SqlClient } from "config/SqlClient";
import { UserAnswerResult } from "entities/UserAnswerResult";
import { AppDataSource } from "data-source";

export class UserAnswerResultService implements IService {
    sqlClient: SqlClient;

    async getAll(): Promise<UserAnswerResult[]> {
        return await AppDataSource.getRepository(UserAnswerResult).find();
    }

    constructor(sqlClient: SqlClient) {
        this.sqlClient = sqlClient;
    }

}