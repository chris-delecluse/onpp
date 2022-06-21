import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class QuestionDescriptionItemText {

    constructor(content: string) {
        this.content = content;
    }

    @PrimaryGeneratedColumn()
    id!: number;

    @Column("text")
    content: string;

    @CreateDateColumn()
    createAt!: Date;

    @UpdateDateColumn()
    updateAt!: Date;
}
