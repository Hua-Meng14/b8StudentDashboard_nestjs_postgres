import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryColumn({ type: 'varchar', length: 300, default: '11019010****' })
    id: string;

    @Column({ type: 'varchar', length: 300, default: 'Student Name' })
    name: string;

    @Column({ type: 'varchar', length: 10, default: 'Male' })
    sex: string;

    @Column({ type: 'varchar', length: 100, default: 'Software Engineering' })
    major: string;

    @Column({ type: 'varchar', length: 500, default: 'Student.png' })
    image: string;

    @Column({ type: 'varchar', length: 300, default: 'student19@kit.edu.kh' })
    email: string;

    @Column({ type: 'varchar', length: 100, default: 'Phnom Penh' })
    province: string;


    @Column({ type: 'varchar', length: 1, default: 'A' })
    section: string;

    @Column()
    kitPoint: number;

    @Column({ type: 'varchar', length: 100, default: 'user' })
    role: string;
}