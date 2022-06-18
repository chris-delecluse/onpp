import { IDbItem } from "./IDbItem";

export class QuestionDescriptionItemImage implements IDbItem {
    id: number;
    path: string;

    constructor(id: number, path: string) {
        this.id   = id;
        this.path = path;
    }
}