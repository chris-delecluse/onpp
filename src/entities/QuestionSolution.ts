import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Question } from "entities/Question";
import { AnswerIndex } from "entities/AnswerIndex";

@Entity()
export class QuestionSolution {

    constructor(question: Question, answerIndex: AnswerIndex) {
        this.questionId    = question;
        this.answerIndex = answerIndex;
    }

    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Question, (q) => q.id)
    questionId: Question;

    @Column()
    answerIndex: AnswerIndex;
}
