import dotenv from 'dotenv'
import mongoose, { Schema }  from 'mongoose';

dotenv.config({ path: './utils/.env' })

mongoose.connect(process.env.DATABASE_URL as string)
  .then(() => console.log('Connected!'));

const User = new Schema({
  email : { type : String },
  password : { type : Number }
}, { collection: 'Users' });

const UserModel = mongoose.model('Users', User);

export default UserModel; 
