import { IDbItem } from "./IDbItem";

export class Question implements IDbItem {
    id: number;
    finalQuestion: string;

    constructor(id: number, finalQuestion: string) {
        this.id            = id;
        this.finalQuestion = finalQuestion;
    }
}