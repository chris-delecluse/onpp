import { IService }         from "services/IService";
import { SqlClient }        from "config/SqlClient";
import { MikroORM }         from "@mikro-orm/core";
import { QuestionSolution } from "entities/QuestionSolution";

export class QuestionSolutionService implements IService {
    sqlClient: SqlClient;
    orm: MikroORM;

    async getAll(): Promise<QuestionSolution[]> {
        await this.orm.em.find(QuestionSolution, {});

        return [];
    }

    constructor(sqlClient: SqlClient, orm: MikroORM) {
        this.sqlClient = sqlClient;
        this.orm       = orm;
    }

}