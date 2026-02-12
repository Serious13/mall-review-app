import { EntitySchema } from 'typeorm';
import { Mall } from './mall.entity';

export const UserSchema = new EntitySchema<Mall>({
  name: 'malls',
  target: Mall,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    name: {
      type: String
    },
    location: {
      type: 'json'
    },
    contact: {
      type: 'json'
    },
    size_sqft: {
      type: Number
    },
    stores_count: {
      type: Number
    },
    rating: {
      type: Number
    },
    opening_hours: {
      type: String
    },
    amenities: {
      type: 'simple-array'
    }
  }
});