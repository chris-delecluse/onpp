import { IService }         from "services/IService";
import { SqlClient }        from "config/SqlClient";
import { QuestionSolution } from "model/QuestionSolution";
import { MikroORM, t }      from "@mikro-orm/core";

export class QuestionSolutionService implements IService {
    sqlClient: SqlClient;
    orm: MikroORM

    async getAll(): Promise<QuestionSolution[]> {



        return []
    }

    constructor(sqlClient: SqlClient, orm: MikroORM) {
        this.sqlClient = sqlClient;
        this.orm = orm;
    }

}