import dotenv from 'dotenv'
import mongoose, { Schema }  from 'mongoose';

dotenv.config({ path: './utils/.env' })

mongoose.connect(process.env.DATABASE_URL as string)
  .then(() => console.log('Mongoose Connected!'));



