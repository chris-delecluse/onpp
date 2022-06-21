import {
    Column,
    CreateDateColumn,
    Entity, JoinColumn,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import { QuestionDescriptionItem } from "entities/QuestionDescriptionItem";
import { QuestionAnswerItem } from "entities/QuestionAnswerItem";
import { UserAnswer } from "entities/UserAnswer";
import { QuestionSolution } from "entities/QuestionSolution";

@Entity()
export class Question {

    constructor(question: string) {
        this.finalQuestion = question;
    }

    @PrimaryGeneratedColumn()
    id!: number;

    @OneToMany(() => QuestionDescriptionItem, (qdi) => qdi.question)
    questionDescriptionItem!: QuestionDescriptionItem[];

    @OneToMany(() => QuestionAnswerItem, (qai) => qai.question)
    questionAnswerItem!: QuestionAnswerItem[];

    @OneToMany(() => UserAnswer, (ua) => ua.question)
    userAnswer!: UserAnswer[];

    @OneToMany(() => QuestionSolution, (qs) => qs.questionId)
    questionSolution!: QuestionSolution[];

    @Column({length: 512})
    finalQuestion: string;

    @CreateDateColumn()
    createAt!: Date;

    @UpdateDateColumn()
    updateAt!: Date;
}
