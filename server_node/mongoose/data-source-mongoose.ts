import dotenv from 'dotenv'
import { connect } from 'mongoose';

dotenv.config({ path: './utils/.env' })

async function connection() : Promise<void> {
  const connection = await connect(process.env.DATABASE_URL as string)
                      .then(() => console.log("Mongoose Connected"))
  return new Promise((resolve, reject) => {
    resolve(connection)
  })
}

export default connection