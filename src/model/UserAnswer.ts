import { IDbItem }     from "./IDbItem";
import { AnswerIndex } from "./AnswerIndex";

export class UserAnswer implements IDbItem {
    id: number;
    questionId: number;
    username: string;
    answerIndex: AnswerIndex;

    constructor(id: number, questionId: number, username: string, answerIndex: AnswerIndex) {
        this.id          = id;
        this.questionId  = questionId;
        this.username    = username;
        this.answerIndex = answerIndex;
    }
}