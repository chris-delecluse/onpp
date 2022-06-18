import { IService } from "services/IService";
import { IDbItem }  from "model/IDbItem";
import { Client }   from "ts-postgres";

export class QuestionService implements IService {

    async getAll(): Promise<IDbItem[]> {

        const client = new Client({
            "host": process.env.DB_HOST || "admin.squarecell.eu",
            "port": parseInt(process.env.DB_PORT || "5432"),
            "user": process.env.DB_USER || "onpp",
            "database": process.env.DB_NAME || "onpp",
            "password": process.env.DB_PASSWORD || "onppDiwa"
        });
        await client.connect();

        const result = client.query("SELECT * FROM question");

        for await (const row of result) {
            console.log(row.get("final_question"));
        }

        return [];
    }
}