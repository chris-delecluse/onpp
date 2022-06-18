import { IService }                from "services/IService";
import { SqlClient }               from "config/SqlClient";
import { QuestionDescriptionItem } from "model/QuestionDescriptionItem";

export class QuestionDescriptionItemService implements IService {
    sqlClient: SqlClient;

    async getAll(): Promise<QuestionDescriptionItem[]> {

        const poolClient = await this.sqlClient.getClient();

        let questionDescriptionItems: QuestionDescriptionItem[];

        try {
            const items = await poolClient.query("SELECT * FROM question_description_item");

            questionDescriptionItems = items.rows.map(value => new QuestionDescriptionItem(
                value.id,
                value.question_id,
                value.idx,
                value.item_type,
                value.item_id
            ));

        } finally {
            await poolClient.release();
        }

        return questionDescriptionItems;
    }

    constructor(sqlClient: SqlClient) {
        this.sqlClient = sqlClient;
    }
}