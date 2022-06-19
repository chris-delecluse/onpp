import { IService }                    from "services/IService";
import { Question }                    from "entities/Question";
import { SqlClient }                   from "config/SqlClient";
import { MikroORM, UseRequestContext } from "@mikro-orm/core";
import { throwError }                  from "services/Error";

export class QuestionService implements IService {
    sqlClient: SqlClient;
    orm: MikroORM;

    @UseRequestContext()
    async getAll(): Promise<Question[]> {

        return await this.orm.em.find(Question, {});
    }

    @UseRequestContext()
    async getOne(id: number): Promise<Question> {

        return await this.orm.em.findOne(Question, id,
                   {populate: ["questionSolution", "questionAnswerItem", "descriptionItems", "userAnswer"]}) ??
               throwError(`Cannot find this question with id: ${id}`);
    }

    constructor(sqlClient: SqlClient, orm: MikroORM) {
        this.sqlClient = sqlClient;
        this.orm       = orm;
    }
}
