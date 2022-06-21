import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserAnswer } from "entities/UserAnswer";

@Entity()
export class UserAnswerResult {

    constructor(userAnswer: UserAnswer, result: boolean) {
        this.userAnswer = userAnswer;
        this.result     = result;
    }

    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => UserAnswer, (ua) => ua.id)
    userAnswer: UserAnswer;

    @Column()
    result: boolean;
}
