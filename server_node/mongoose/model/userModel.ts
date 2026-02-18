import mongoose, {Model, model, Mongoose, Schema, connect} from 'mongoose';
import UserSchema from '../schema/userSchema';
import { User  } from '../../interfaces/interfaces';
import connection  from '../data-source-mongoose';

const UserModel = model<User>('User', UserSchema)

connection().catch((err: any) => console.log(err))

export default UserModel