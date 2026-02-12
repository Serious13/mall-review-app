import { Entity, ObjectId, ObjectIdColumn, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity("malls")
export class Mall {
    @ObjectIdColumn()
    id!: ObjectId

    @Column()
    name: string

    @Column()
    location: object

    @Column()
    contact: object

    @Column()
    size_sqft: number

    @Column()
    stores_count: number

    @Column()
    rating: number

    @Column()
    opening_hours: string

    @Column()
    amenities : string[]

    constructor(_id: ObjectId, name: string, lastName: string, size_sqft: number,
        stores_count:number,rating:number, opening_hours: string, amenities:[], location : {}, contact: {}) {
        this.name = name   
        this.size_sqft = size_sqft        
        this.stores_count = stores_count
        this.rating = rating
        this.opening_hours = opening_hours
        this.amenities = amenities
        this.location = location
        this.contact = contact
    }
}