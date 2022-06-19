import { Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { UserAnswer }                              from "entities/UserAnswer";

@Entity()
export class UserAnswerResult {

    constructor(userAnswer: UserAnswer, result: boolean) {
        this.userAnswer = userAnswer;
        this.result     = result;
    }

    @PrimaryKey()
    id!: number;

    @ManyToOne(() => UserAnswer)
    userAnswer!: UserAnswer;

    @Property()
    result!: boolean;
}
