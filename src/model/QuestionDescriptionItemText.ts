import { IDbItem } from "./IDbItem";

export class QuestionDescriptionItemText implements IDbItem {
    id: number;
    content: string;

    constructor(id: number, content: string) {
        this.id      = id;
        this.content = content;
    }
}