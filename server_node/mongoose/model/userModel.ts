import mongoose, {Model, model} from 'mongoose';
import UserSchema from '../schema/UserSchema';
import { User  } from '../../interfaces/interfaces';

//const UserModel: Model<User> = mongoose.model<User>('User', UserSchema);
//const UserModel = mongoose.model('Users', User);
const UserModel: Model<User> = mongoose.model<User>('User', UserSchema);

export default UserModel; 