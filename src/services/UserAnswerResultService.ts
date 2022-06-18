import { IService }         from "services/IService";
import { SqlClient }        from "config/SqlClient";
import { UserAnswerResult } from "model/UserAnswerResult";

export class UserAnswerResultService implements IService {
    sqlClient: SqlClient;

    async getAll(): Promise<UserAnswerResult[]> {

        const poolClient = await this.sqlClient.getClient();

        let userAnswerResults: UserAnswerResult[];

        try {
            const items = await poolClient.query("SELECT * FROM user_answer_result");

            userAnswerResults = items.rows.map(value => new UserAnswerResult(
                value.id,
                value.user_answer_id,
                value.result
            ));

        } finally {
            await poolClient.release();
        }

        return userAnswerResults;
    }

    constructor(sqlClient: SqlClient) {
        this.sqlClient = sqlClient;
    }

}