import { IService }                     from "services/IService";
import { SqlClient }                    from "config/SqlClient";
import { QuestionDescriptionItemImage } from "model/QuestionDescriptionItemImage";

export class QuestionDescriptionItemImageService implements IService {
    sqlClient: SqlClient;

    async getAll(): Promise<QuestionDescriptionItemImage[]> {

        const poolClient = await this.sqlClient.getClient();

        let questionDescriptionItemImage: QuestionDescriptionItemImage[];

        try {
            const items = await poolClient.query("SELECT * FROM question_description_item_image");

            questionDescriptionItemImage = items.rows.map(value => new QuestionDescriptionItemImage(
                value.id,
                value.path
            ));

        } finally {
            await poolClient.release();
        }

        return questionDescriptionItemImage;
    }

    constructor(sqlClient: SqlClient) {
        this.sqlClient = sqlClient;
    }

}