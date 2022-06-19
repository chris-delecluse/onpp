import { IService }                    from "services/IService";
import { SqlClient }                   from "config/SqlClient";
import { QuestionDescriptionItemText } from "model/QuestionDescriptionItemText";
import { MikroORM }                    from "@mikro-orm/core";

export class QuestionDescriptionItemTextService implements IService {
    sqlClient: SqlClient;
    orm: MikroORM

    async getAll(): Promise<QuestionDescriptionItemText[]> {



        return []
    }

    constructor(sqlClient: SqlClient, orm: MikroORM) {
        this.sqlClient = sqlClient;
        this.orm = orm;
    }
}