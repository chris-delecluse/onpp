import { IService } from "services/IService";
import { SqlClient } from "config/SqlClient";
import { Question } from "entities/Question";
import { AppDataSource } from "data-source";
import { throwError } from "services/error";
import { Repository } from "typeorm";

export class QuestionService implements IService {
    sqlClient: SqlClient;
    questionRepository: Repository<Question>;

    async getAll(): Promise<Question[]> {
        return await this.questionRepository.find();
    }

    async getOne(id: number): Promise<Question> {
        return await this.questionRepository.findOne({
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
        this.sqlClient          = sqlClient;
        this.questionRepository = AppDataSource.getRepository(Question);
    }
}
