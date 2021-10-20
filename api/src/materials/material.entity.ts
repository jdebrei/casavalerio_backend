import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Material {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;
}