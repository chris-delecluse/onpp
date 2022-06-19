import { IService }                from "services/IService";
import { SqlClient }               from "config/SqlClient";
import { MikroORM }                from "@mikro-orm/core";
import { QuestionDescriptionItem } from "entities/QuestionDescriptionItem";

export class QuestionDescriptionItemService implements IService {
    sqlClient: SqlClient;
    orm: MikroORM;

    async getAll(): Promise<QuestionDescriptionItem[]> {

        return await this.orm.em.find(QuestionDescriptionItem, {});
    }

    constructor(sqlClient: SqlClient, orm: MikroORM) {
        this.sqlClient = sqlClient;
        this.orm       = orm;
    }
}