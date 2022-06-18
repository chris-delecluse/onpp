import { IDbItem }     from "./IDbItem";
import { AnswerIndex } from "./AnswerIndex";

export class QuestionAnswerItem implements IDbItem {
    id: number;
    questionId: number;
    content: string;
    index: AnswerIndex;

    constructor(id: number, questionId: number, content: string, index: AnswerIndex) {
        this.id         = id;
        this.questionId = questionId;
        this.content    = content;
        this.index      = index;
    }
}