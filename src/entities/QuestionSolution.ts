import { Entity, ManyToOne, OneToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { Question }                                          from "entities/Question";

@Entity()
export class QuestionSolution {

    constructor(question: Question, answerIndex: number) {
        this.question    = question;
        this.answerIndex = answerIndex;
    }

    @PrimaryKey()
    id!: number;

    @OneToOne(() => Question)
    question!: Question;

    @Property()
    answerIndex!: number;
}
