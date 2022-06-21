import { IService } from "services/IService";
import { SqlClient } from "config/SqlClient";
import { UserAnswer } from "entities/UserAnswer";
import { AppDataSource } from "data-source";

export class UserAnswerService implements IService {
    sqlClient: SqlClient;

    async getAll(): Promise<UserAnswer[]> {
        return await AppDataSource.getRepository(UserAnswer).find();
    }

    constructor(sqlClient: SqlClient) {
        this.sqlClient = sqlClient;
    }

}