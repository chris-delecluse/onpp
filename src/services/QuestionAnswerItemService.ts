import { IService }           from "services/IService";
import { SqlClient }          from "config/SqlClient";
import { IDbItem }            from "model/IDbItem";
import { QuestionAnswerItem } from "model/QuestionAnswerItem";

export class QuestionAnswerItemService implements IService {
    sqlClient: SqlClient;

    async getAll(): Promise<IDbItem[]> {

        const poolClient = await this.sqlClient.getClient();

        let questionAnswerItems: QuestionAnswerItem[];

        try {
            const items = await poolClient.query("SELECT * FROM question_answer_item");

            questionAnswerItems = items.rows.map(value => new QuestionAnswerItem(
                value.id,
                value.question_id,
                value.content,
                value.index
            ));

        } finally {
            await poolClient.release();
        }

        return questionAnswerItems;
    }

    constructor(sqlClient: SqlClient) {
        this.sqlClient = sqlClient;
    }
}