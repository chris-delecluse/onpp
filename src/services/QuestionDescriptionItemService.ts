import { IService }                from "services/IService";
import { SqlClient }               from "config/SqlClient";
import { QuestionDescriptionItem } from "model/QuestionDescriptionItem";
import { MikroORM }                from "@mikro-orm/core";

export class QuestionDescriptionItemService implements IService {
    sqlClient: SqlClient;
    orm: MikroORM;

    async getAll(): Promise<QuestionDescriptionItem[]> {

        return [];
    }

    constructor(sqlClient: SqlClient, orm: MikroORM) {
        this.sqlClient = sqlClient;
        this.orm       = orm;
    }
}