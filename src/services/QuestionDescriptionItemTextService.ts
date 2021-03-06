import { IService }                    from "services/IService";
import { SqlClient }                   from "config/SqlClient";
import { QuestionDescriptionItemText } from "model/QuestionDescriptionItemText";

export class QuestionDescriptionItemTextService implements IService {
    sqlClient: SqlClient;

    async getAll(): Promise<QuestionDescriptionItemText[]> {

        const poolClient = await this.sqlClient.getClient();

        let questionDescriptionItemTexts: QuestionDescriptionItemText[];

        try {
            const items = await poolClient.query("SELECT * FROM question_description_item_text");

            questionDescriptionItemTexts = items.rows.map(value => new QuestionDescriptionItemText(
                value.id,
                value.content
            ));

        } finally {
            await poolClient.release();
        }

        return questionDescriptionItemTexts;
    }

    constructor(sqlClient: SqlClient) {
        this.sqlClient = sqlClient;
    }

}