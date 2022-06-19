import { Collection, Entity, OneToMany, PrimaryKey, Property } from "@mikro-orm/core";
import { QuestionDescriptionItem }                             from "entities/QuestionDescriptionItem";
import { QuestionSolution }                                    from "entities/QuestionSolution";
import { QuestionAnswerItem }                                  from "entities/QuestionAnswerItem";
import { UserAnswer }                                          from "entities/UserAnswer";

@Entity()
export class Question {

    constructor(question: string) {
        this.finalQuestion = question;
    }

    @PrimaryKey()
    id!: number;

    @OneToMany(() => QuestionDescriptionItem, qdi => qdi.question)
    descriptionItems = new Collection<QuestionDescriptionItem>(this);

    @OneToMany(() => QuestionSolution, qs => qs.question)
    questionSolution = new Collection<QuestionSolution>(this);

    @OneToMany(() => QuestionAnswerItem, qai => qai.question)
    questionAnswerItem = new Collection<QuestionDescriptionItem>(this);

    @OneToMany(() => UserAnswer, ua => ua.question)
    userAnswer = new Collection<UserAnswer>(this);

    @Property()
    finalQuestion!: string;
}
