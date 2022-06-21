import { IService } from "services/IService";
import { SqlClient } from "config/SqlClient";
import { Question } from "entities/Question";
import { AppDataSource } from "data-source";
import { throwError } from "services/error";

export class QuestionService implements IService {
    sqlClient: SqlClient;

    async getAll(): Promise<Question[]> {
        return await AppDataSource.getRepository(Question).find();
    }

    async getOne(id: number): Promise<Question> {
        return await AppDataSource.getRepository(Question).findOne({
                   where: {id: id},
                   relations: {
                       questionAnswerItem: true,
                       questionDescriptionItem: true,
                       userAnswer: true,
                       questionSolution: true
                   }
               }) ??
               throwError(`Cannot find this question with id ${id}`);
    }

    constructor(sqlClient: SqlClient) {
        this.sqlClient = sqlClient;
    }
}
