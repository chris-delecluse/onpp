import { IService } from "services/IService";
import { SqlClient } from "config/SqlClient";
import { QuestionSolution } from "entities/QuestionSolution";
import { AppDataSource } from "data-source";

export class QuestionSolutionService implements IService {
    sqlClient: SqlClient;

    async getAll(): Promise<QuestionSolution[]> {
        return await AppDataSource.getRepository(QuestionSolution).find();
    }

    constructor(sqlClient: SqlClient) {
        this.sqlClient = sqlClient;
    }

}