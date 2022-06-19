import { Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { Question }                                from "entities/Question";
import { AnswerIndex }                             from "entities/AnswerIndex";

@Entity()
export class QuestionAnswerItem {
    constructor(question: Question, content: string, index: AnswerIndex) {
        this.question = question;
        this.content  = content;
        this.index    = index;
    }

    @PrimaryKey()
    id!: number;

    @ManyToOne(() => Question)
    question!: Question;

    @Property()
    content!: string;

    @Property()
    index!: AnswerIndex;
}
