import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Question } from "entities/Question";
import { AnswerIndex } from "entities/AnswerIndex";

@Entity()
export class QuestionAnswerItem {

    constructor(question: Question, content: string, index: AnswerIndex) {
        this.question = question;
        this.content  = content;
        this.index    = index;
    }

    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Question, (q) => q.id)
    question: Question;

    @Column({length: 512})
    content: string;

    @Column()
    index: AnswerIndex;
}
