import { IDbItem }                     from "./IDbItem";
import { AnswerIndex }                 from "./AnswerIndex";
import { QuestionDescriptionItemType } from "./QuestionDescriptionItemType";

export class QuestionDescriptionItem implements IDbItem {
    id: number;
    questionId: number;
    index: AnswerIndex;
    itemType: QuestionDescriptionItemType;
    itemId: number;

    constructor(id: number, questionId: number, index: AnswerIndex, itemType: QuestionDescriptionItemType, itemId: number) {
        this.id         = id;
        this.questionId = questionId;
        this.index      = index;
        this.itemType   = itemType;
        this.itemId     = itemId;
    }
}