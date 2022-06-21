import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class QuestionDescriptionItemImage {

    constructor(path: string) {
        this.path = path;
    }

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({length: 512})
    path: string;

    @CreateDateColumn()
    createAt!: Date;

    @UpdateDateColumn()
    updateAt!: Date;
}
