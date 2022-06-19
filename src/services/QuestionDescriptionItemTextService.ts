import { IService }                    from "services/IService";
import { SqlClient }                   from "config/SqlClient";
import { MikroORM }                    from "@mikro-orm/core";
import { QuestionDescriptionItemText } from "entities/QuestionDescriptionItemText";

export class QuestionDescriptionItemTextService implements IService {
    sqlClient: SqlClient;
    orm: MikroORM;

    async getAll(): Promise<QuestionDescriptionItemText[]> {

        return await this.orm.em.find(QuestionDescriptionItemText, {});
    }

    constructor(sqlClient: SqlClient, orm: MikroORM) {
        this.sqlClient = sqlClient;
        this.orm       = orm;
    }
}