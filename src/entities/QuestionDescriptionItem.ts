import { Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { Question }                                from "entities/Question";
import { ItemType }                                from "entities/ItemType";

@Entity()
export class QuestionDescriptionItem {

    constructor(question: Question, itemType: ItemType, itemId: number, index: number) {
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
    itemType!: ItemType;
}
