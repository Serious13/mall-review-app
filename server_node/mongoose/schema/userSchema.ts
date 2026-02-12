import mongoose, { Schema, Model }  from 'mongoose';
import { User  } from '../../interfaces/interfaces';

const UserSchema = new Schema<User>({ 
  email: { type: String, required: true, unique: true, index: true },
  password: { type: Number, required: true }
}, { collection: 'Users' });

export default UserSchema;
