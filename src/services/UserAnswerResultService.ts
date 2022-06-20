import { IService }                    from "services/IService";
import { SqlClient }                   from "config/SqlClient";
import { MikroORM, UseRequestContext } from "@mikro-orm/core";
import { UserAnswerResult }            from "entities/UserAnswerResult";
import { throwError }                  from "services/Error";

export class UserAnswerResultService implements IService {
    sqlClient: SqlClient;
    orm: MikroORM;

    @UseRequestContext()
    async getAll(): Promise<UserAnswerResult[]> {

        return await this.orm.em.find(UserAnswerResult, {});
    }

    @UseRequestContext()
    async getOne(id: number): Promise<UserAnswerResult> {

        return await this.orm.em.findOne(UserAnswerResult, id, {populate: ["userAnswer"]}) ??
               throwError(`Cannot find this answer result with id: ${id}`);
    }

    constructor(sqlClient: SqlClient, orm: MikroORM) {
        this.sqlClient = sqlClient;
        this.orm       = orm;
    }
}
