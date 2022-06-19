import { IService }                     from "services/IService";
import { SqlClient }                    from "config/SqlClient";
import { MikroORM }                     from "@mikro-orm/core";
import { QuestionDescriptionItemImage } from "entities/QuestionDescriptionItemImage";

export class QuestionDescriptionItemImageService implements IService {
    sqlClient: SqlClient;
    orm: MikroORM;

    async getAll(): Promise<QuestionDescriptionItemImage[]> {

        return await this.orm.em.find(QuestionDescriptionItemImage, {});
    }

    constructor(sqlClient: SqlClient, orm: MikroORM) {
        this.sqlClient = sqlClient;
        this.orm       = orm;
    }
}