import { Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { Question }                                from "entities/Question";

@Entity()
export class UserAnswer {

    constructor(question: Question, answerIndex: number, username: string) {
        this.question    = question;
        this.answerIndex = answerIndex;
        this.username    = username;
    }

    @PrimaryKey()
    id!: number;

    @Property()
    answerIndex!: number;

    @ManyToOne(() => Question)
    question!: Question;

    @Property()
    username!: string;
}
