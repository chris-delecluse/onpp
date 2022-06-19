import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class QuestionDescriptionItemText {

    constructor(content: string) {
        this.content = content;
    }

    @PrimaryKey()
    id!: number;

    @Property()
    content!: string;
}
