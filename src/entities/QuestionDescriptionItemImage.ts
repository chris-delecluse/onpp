import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class QuestionDescriptionItemImage {

    constructor(path: string) {
        this.path = path;
    }

    @PrimaryKey()
    id!: number;

    @Property()
    path!: string;
}
