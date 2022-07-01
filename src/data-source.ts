import { DataSource } from "typeorm";
import { Question } from "entities/Question";
import { QuestionAnswerItem } from "entities/QuestionAnswerItem";
import { QuestionDescriptionItemImage } from "entities/QuestionDescriptionItemImage";
import { QuestionDescriptionItemText } from "entities/QuestionDescriptionItemText";
import { QuestionSolution } from "entities/QuestionSolution";
import { UserAnswer } from "entities/UserAnswer";
import { UserAnswerResult } from "entities/UserAnswerResult";
import { QuestionDescriptionItem } from "entities/QuestionDescriptionItem";
import dotenv from "dotenv";

dotenv.config()

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || ""),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: true,
    entities: [
        Question,
        QuestionAnswerItem,
        QuestionDescriptionItem,
        QuestionDescriptionItemImage,
        QuestionDescriptionItemText,
        QuestionSolution,
        UserAnswer,
        UserAnswerResult
    ],
    subscribers: [],
    migrations: []
});
