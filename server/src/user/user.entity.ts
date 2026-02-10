
import { Index, Entity,PrimaryColumn, Column, PrimaryGeneratedColumn, OneToMany, ObjectIdColumn, ObjectId, OneToOne } from 'typeorm';
 
@Entity('Users')
export class UserEntity {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  email: string

  @Column()
  password: string

  constructor(email: string, password : string) {
    this.email = email
    this.password = password
  }
}
