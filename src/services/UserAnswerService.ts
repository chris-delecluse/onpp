import { IService }   from "services/IService";
import { SqlClient }  from "config/SqlClient";
import { MikroORM }   from "@mikro-orm/core";
import { UserAnswer } from "entities/UserAnswer";

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