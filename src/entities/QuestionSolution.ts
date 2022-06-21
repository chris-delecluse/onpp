import { Column, Entity, OneToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import { Question } from "entities/Question";
import { AnswerIndex } from "entities/AnswerIndex";

@Entity()
export class QuestionSolution {

    constructor(question: Question, answerIndex: AnswerIndex) {
        this.question    = question;
        this.answerIndex = answerIndex;
    }

    @PrimaryGeneratedColumn()
    id!: number;

    @OneToOne(() => Question, (q) => q.id)
    @JoinColumn()
    question: Question;

    @Column()
    answerIndex: AnswerIndex;
}
