import { IDbItem }     from "./IDbItem";
import { AnswerIndex } from "./AnswerIndex";

export class QuestionSolution implements IDbItem {
    id: number;
    questionId: number;
    answerIndex: AnswerIndex;

    constructor(id: number, questionId: number, answerIndex: AnswerIndex) {
        this.id          = id;
        this.questionId  = questionId;
        this.answerIndex = answerIndex;
    }
}