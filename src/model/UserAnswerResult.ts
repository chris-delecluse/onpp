import { IDbItem } from "./IDbItem";

export class UserAnswerResult implements IDbItem {
    id: number;
    userAnswerId: number;
    result: boolean;

    constructor(id: number, userAnswerId: number, result: boolean) {
        this.id           = id;
        this.userAnswerId = userAnswerId;
        this.result       = result;
    }
}