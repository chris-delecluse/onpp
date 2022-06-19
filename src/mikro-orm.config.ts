import { Question }                     from "entities/Question";
import { QuestionDescriptionItem }      from "entities/QuestionDescriptionItem";
import { QuestionDescriptionItemText }  from "entities/QuestionDescriptionItemText";
import { QuestionDescriptionItemImage } from "entities/QuestionDescriptionItemImage";
import { QuestionAnswerItem }           from "entities/QuestionAnswerItem";
import { QuestionSolution }             from "entities/QuestionSolution";
import { UserAnswer }                   from "entities/UserAnswer";
import { UserAnswerResult }             from "entities/UserAnswerResult";

export default {
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
    host: "admin.squarecell.eu",
    dbName: "onpp",
    port: 5432,
    user: "onpp",
    password: "onppDiwa",
    type: "postgresql"
};