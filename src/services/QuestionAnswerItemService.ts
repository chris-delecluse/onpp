import { IService }           from "services/IService";
import { SqlClient }          from "config/SqlClient";
import { QuestionAnswerItem } from "entities/QuestionAnswerItem";
import { MikroORM }           from "@mikro-orm/core";

export class QuestionAnswerItemService implements IService {
    sqlClient: SqlClient;
    orm: MikroORM;

    async getAll(): Promise<QuestionAnswerItem[]> {

        return await this.orm.em.find(QuestionAnswerItem, {});
    }

    constructor(sqlClient: SqlClient, orm: MikroORM) {
        this.sqlClient = sqlClient;
        this.orm       = orm;
    }
}