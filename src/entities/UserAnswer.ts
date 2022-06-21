import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Question } from "entities/Question";

@Entity()
export class UserAnswer {

    constructor(question: Question, answerIndex: number, username: string) {
        this.question    = question;
        this.answerIndex = answerIndex;
        this.username    = username;
    }

    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Question, (q) => q.id)
    question!: Question;

    @Column()
    answerIndex!: number;

    @Column({length: 512})
    username!: string;
}
