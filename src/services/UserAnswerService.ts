import { IService }   from "services/IService";
import { SqlClient }  from "config/SqlClient";
import { UserAnswer } from "model/UserAnswer";

export class UserAnswerService implements IService {
    sqlClient: SqlClient;

    async getAll(): Promise<UserAnswer[]> {

        const poolClient = await this.sqlClient.getClient();

        let questionSolution: UserAnswer[];

        try {
            const items = await poolClient.query("SELECT * FROM user_answer");

            questionSolution = items.rows.map(value => new UserAnswer(
                value.id,
                value.question_id,
                value.user_name,
                value.answer_index
            ));

        } finally {
            await poolClient.release();
        }

        return questionSolution;
    }

    constructor(sqlClient: SqlClient) {
        this.sqlClient = sqlClient;
    }

}