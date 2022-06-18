import { IService }  from "services/IService";
import { Question }  from "model/Question";
import { SqlClient } from "config/SqlClient";

export class QuestionService implements IService {
    sqlClient: SqlClient;

    async getAll(): Promise<Question[]> {

        const poolClient = await this.sqlClient.getClient();

        let questions: Question[];

        try {
            const items = await poolClient.query("SELECT * FROM question");

            questions = items.rows.map(value => {
                return new Question(value.id, value.final_question);
            });

        } finally {
            await poolClient.release();
        }

        return questions;
    }

    constructor(sqlClient: SqlClient) {
        this.sqlClient = sqlClient;
    }

}