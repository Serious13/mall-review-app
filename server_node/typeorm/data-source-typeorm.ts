import { DataSource } from "typeorm"
import "reflect-metadata"
import { Mall } from "./entity/mall/mall.entity"
import dotenv from 'dotenv'

dotenv.config({ path: './utils/.env' })

const mongoDataSource : DataSource = new DataSource({
    type: 'mongodb',
    url: process.env.DATABASE_URL, 
    database: 'mall',
    entities: [Mall],
    synchronize: true
});

(async () => {
  await mongoDataSource.initialize()
})();

console.log("DATASOURCE", mongoDataSource, mongoDataSource.getMongoRepository(Mall))
const mongoRepository = mongoDataSource.getMongoRepository(Mall)
export default mongoRepository;