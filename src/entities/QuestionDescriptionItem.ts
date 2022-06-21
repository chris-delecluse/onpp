import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Question } from "entities/Question";
import { ItemType } from "entities/ItemType";

@Entity()
export class QuestionDescriptionItem {

    constructor(question: Question, itemType: ItemType, itemId: number, index: number) {
        this.question = question;
        this.itemType = itemType;
        this.itemId   = itemId;
        this.index    = index;
    }

    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Question, (q) => q.id)
    question: Question;

    @Column()
    itemType: ItemType;

    @Column()
    itemId: number;

    @Column()
    index: number;
}
