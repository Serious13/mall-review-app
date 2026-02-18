import mongoose, { Schema, Model }  from 'mongoose';
import { User  } from '../../interfaces/interfaces';

const UserSchema = new Schema<User>
  (
    { 
      email: { 
        type: String,
       
      },
      password: { 
        type: String,
      }
    },
    { 
      collection: 'users' 
    }
)

export default UserSchema;
