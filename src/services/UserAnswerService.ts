import { IService }         from "services/IService";
import { SqlClient }        from "config/SqlClient";
import { UserAnswer }       from "model/UserAnswer";
import { MikroORM }         from "@mikro-orm/core";
import { QuestionSolution } from "model/QuestionSolution";

export class UserAnswerService implements IService {
    sqlClient: SqlClient;
    orm: MikroORM

    async getAll(): Promise<UserAnswer[]> {



        return []
    }

    constructor(sqlClient: SqlClient, orm: MikroORM) {
        this.sqlClient = sqlClient;
        this.orm = orm;
    }
}