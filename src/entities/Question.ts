import { Collection, Entity, OneToMany, PrimaryKey, Property } from "@mikro-orm/core";
import { QuestionDescriptionItem }                             from "entities/QuestionDescriptionItem";
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

    @OneToMany(() => QuestionAnswerItem, qai => qai.question)
    questionAnswerItem = new Collection<QuestionDescriptionItem>(this);

    @OneToMany(() => UserAnswer, ua => ua.question)
    userAnswer = new Collection<UserAnswer>(this);

    @Property()
    finalQuestion!: string;

    @Property()
    createAt: Date = new Date();

    @Property({
        onUpdate: () => new Date()
    })
    updateAt: Date = new Date();
}
