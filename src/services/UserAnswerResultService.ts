import { IService }         from "services/IService";
import { SqlClient }        from "config/SqlClient";
import { MikroORM }         from "@mikro-orm/core";
import { UserAnswerResult } from "entities/UserAnswerResult";

export class UserAnswerResultService implements IService {
    sqlClient: SqlClient;
    orm: MikroORM

    async getAll(): Promise<UserAnswerResult[]> {



        return []
    }

    constructor(sqlClient: SqlClient, orm: MikroORM) {
        this.sqlClient = sqlClient;
        this.orm = orm;
    }
}