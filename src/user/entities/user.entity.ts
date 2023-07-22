/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {Entity,PrimaryGeneratedColumn,Column} from 'typeorm'

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    title:string;

    @Column()
    body:string;
}
