import { IService } from "services/IService";
import { SqlClient } from "config/SqlClient";
import { QuestionSolution } from "entities/QuestionSolution";

export class QuestionSolutionService implements IService {
    sqlClient: SqlClient;

    async getAll(): Promise<QuestionSolution[]> {

        return [];
    }

    constructor(sqlClient: SqlClient) {
        this.sqlClient = sqlClient;
    }

}