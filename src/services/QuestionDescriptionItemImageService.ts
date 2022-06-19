import { IService }                     from "services/IService";
import { SqlClient }                    from "config/SqlClient";
import { QuestionDescriptionItemImage } from "model/QuestionDescriptionItemImage";
import { MikroORM }                     from "@mikro-orm/core";
import { QuestionSolution }             from "model/QuestionSolution";

export class QuestionDescriptionItemImageService implements IService {
    sqlClient: SqlClient;
    orm: MikroORM

    async getAll(): Promise<QuestionDescriptionItemImage[]> {



        return []
    }

    constructor(sqlClient: SqlClient, orm: MikroORM) {
        this.sqlClient = sqlClient;
        this.orm = orm;
    }
}