
import { EntitySchema } from 'typeorm';
import { UserEntity } from './user.entity';

export const UserSchema = new EntitySchema<UserEntity>({
  name: 'Users',
  target: UserEntity,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
  }
});
