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

    async getOne(id: number): Promise<any> {
        return await AppDataSource.getRepository(Question).findOneBy({id: id}) ??
               throwError(`Cannot find this question with id ${id}`);
    }

    constructor(sqlClient: SqlClient) {
        this.sqlClient = sqlClient;
    }
}
