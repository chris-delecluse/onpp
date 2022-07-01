import { IFakeDbItem } from "../models/IFakeDbItem";

export class TestQuestion implements IFakeDbItem {
    id!: number;
    question: string;
    createAt: Date = new Date();
    updateAt: Date = new Date();

    constructor(question: string) {
        this.question = question;
    }
}