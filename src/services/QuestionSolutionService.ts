import { IService }         from "services/IService";
import { SqlClient }        from "config/SqlClient";
import { QuestionSolution } from "model/QuestionSolution";

export class QuestionSolutionService implements IService {
    constructor(sqlClient: SqlClient) {
        this.sqlClient = sqlClient;
    }

    sqlClient: SqlClient;

    async getAll(): Promise<QuestionSolution[]> {

        const poolClient = await this.sqlClient.getClient();

        let questionSolutions: QuestionSolution[];

        try {
            const items = await poolClient.query("SELECT * FROM question_solution");

            questionSolutions = items.rows.map(value => new QuestionSolution(
                value.id,
                value.question_id,
                value.answer_index
            ));

        } finally {
            await poolClient.release();
        }

        return questionSolutions;
    }

}