import { Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { Question }                                from "entities/Question";

@Entity()
export class QuestionDescriptionItem {

    constructor(question: Question, itemId: number, index: number, itemType: number) {
        this.question = question;
        this.itemId   = itemId;
        this.index    = index;
        this.itemType = itemType;
    }

    @PrimaryKey()
    id!: number;

    @ManyToOne(() => Question)
    question!: Question;

    @Property()
    itemId!: number;

    @Property()
    index!: number;

    @Property()
    itemType!: number;
}
