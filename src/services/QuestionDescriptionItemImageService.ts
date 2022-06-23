import { IService } from "services/IService";
import { SqlClient } from "config/SqlClient";
import { QuestionDescriptionItemImage } from "entities/QuestionDescriptionItemImage";
import { AppDataSource } from "data-source";
import { throwError } from "exceptions/error";

export class QuestionDescriptionItemImageService implements IService {
    sqlClient: SqlClient;

    async getAll(): Promise<QuestionDescriptionItemImage[]> {
        return await AppDataSource.getRepository(QuestionDescriptionItemImage).find();
    }

    async getOne(id: number): Promise<QuestionDescriptionItemImage> {
        return await AppDataSource.getRepository(QuestionDescriptionItemImage).findOne({
            where: {id: id}
        }) ?? throwError(`Cannot find this image with ${id}`);
    }

    constructor(sqlClient: SqlClient) {
        this.sqlClient = sqlClient;
    }
}
