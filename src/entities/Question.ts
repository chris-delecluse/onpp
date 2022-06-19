import { Collection, Entity, OneToMany, OneToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { QuestionDescriptionItem }                                       from "entities/QuestionDescriptionItem";
import { QuestionSolution }                                              from "entities/QuestionSolution";
import { QuestionAnswerItem }                                            from "entities/QuestionAnswerItem";
import { UserAnswer }                                                    from "entities/UserAnswer";

@Entity()
export class Question {

    constructor(question: string, solution: QuestionSolution) {
        this.finalQuestion    = question;
        this.questionSolution = solution;
    }

    @PrimaryKey()
    id!: number;

    @OneToMany(() => QuestionDescriptionItem, qdi => qdi.question)
    descriptionItems = new Collection<QuestionDescriptionItem>(this);

    @OneToOne(() => QuestionSolution)
    questionSolution!: QuestionSolution;

    @OneToMany(() => QuestionAnswerItem, qai => qai.question)
    questionAnswerItem = new Collection<QuestionDescriptionItem>(this);

    @OneToMany(() => UserAnswer, ua => ua.question)
    userAnswer = new Collection<UserAnswer>(this);

    @Property()
    finalQuestion!: string;
}
