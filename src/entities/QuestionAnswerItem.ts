import { Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { Question }                                from "entities/Question";

@Entity()
export class QuestionAnswerItem {
    constructor(question: Question, content: string, index: number) {
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
    index!: number;
}
