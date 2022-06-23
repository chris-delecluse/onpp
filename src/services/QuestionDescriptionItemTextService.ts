import { IService } from "services/IService";
import { SqlClient } from "config/SqlClient";
import { AppDataSource } from "data-source";
import { QuestionDescriptionItemText } from "entities/QuestionDescriptionItemText";
import { throwError } from "exceptions/error";

export class QuestionDescriptionItemTextService implements IService {
    sqlClient: SqlClient;

    async getAll(): Promise<QuestionDescriptionItemText[]> {
        return await AppDataSource.getRepository(QuestionDescriptionItemText).find();
    }

    async getOne(id: number): Promise<QuestionDescriptionItemText> {
        return await AppDataSource.getRepository(QuestionDescriptionItemText).findOne({
            where: {id: id}
        }) ?? throwError(`Cannot find this description item text with id ${id}`);
    }

    constructor(sqlClient: SqlClient) {
        this.sqlClient = sqlClient;
    }

}