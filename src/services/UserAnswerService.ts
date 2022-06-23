import { IService } from "services/IService";
import { SqlClient } from "config/SqlClient";
import { UserAnswer } from "entities/UserAnswer";
import { AppDataSource } from "data-source";
import { Question } from "entities/Question";
import { throwError } from "exceptions/error";
import { Repository } from "typeorm";
import { AnswerIndex } from "entities/AnswerIndex";

export class UserAnswerService implements IService {
    sqlClient: SqlClient;
    questionRepository: Repository<Question>;
    userAnswerRepository: Repository<UserAnswer>;

    async getAll(): Promise<UserAnswer[]> {
        return await this.userAnswerRepository.find();
    }

    async post(questionId: number, answerIndex: AnswerIndex, username: string): Promise<void> {
        const question = await this.questionRepository.findOneBy({id: questionId}) ??
                         throwError(`Error: cannot get this question with id ${questionId}`);

        await this.userAnswerRepository.insert(new UserAnswer(question, answerIndex, username));
    }

    constructor(sqlClient: SqlClient) {
        this.sqlClient            = sqlClient;
        this.questionRepository   = AppDataSource.getRepository(Question);
        this.userAnswerRepository = AppDataSource.getRepository(UserAnswer);
    }
}