import { AxiosInstance } from 'axios'
import redisClient from './redis'
import { RedisClientType } from 'redis';
import mongoRepository from './typeorm/data-source-typeorm';
import UserModel from './mongoose/data-source-mongoose';
import { Mall, User } from './interfaces/interfaces';

export class handleInteractor {
    axiosClient : AxiosInstance
    redisClient : RedisClientType
    
    constructor(axiosClient : AxiosInstance) {
        this.axiosClient = axiosClient
        this.redisClient = redisClient
    }

    async getMalls(): Promise<Mall[]> {
        try {
            const malls : Mall[] = await mongoRepository.find()
            console.log("malls", malls)
            return new Promise((resolve, reject) => {
                resolve(malls)
            })
        }
        catch(e : any) {
            console.log("error", e, e.response)
            return e
        }
    }

    async getMallByName(name : string): Promise<Mall | null> {
        try {
            let mall : Mall | null = await mongoRepository.findOne({
                where : {
                    "name" : name
                }
            })
            console.log("malls", mall)
            return new Promise((resolve, reject) => {
                resolve(mall)
            })
        }
        catch(e: any) {
            console.log("error", e, e.response)
            return e
        }
    }
    
    async setMallName(initialName: string, adjustedName : string): Promise<Object> {
        try {
            console.log("initialNam", initialName, adjustedName)
            const malls = await mongoRepository.findOneAndUpdate(
                { 
                    name:  `"${initialName}"`
                }, 
                {
                    $set: { name: adjustedName as string}
                },
                {
                    returnDocument: 'after', 
                }
            )
            console.log("malls", malls)
            return new Promise((resolve, reject) => {
                if (malls) resolve(malls)
            })
        }
        catch(e : any) {
            console.log("error", e, e.response)
            return e
        }
       
    }
    
    async deleteMallByName(name : string): Promise<string> {
        try {
            const response = await mongoRepository.delete({
                name: name
            })
            console.log("deletedMall", response)
            return new Promise((resolve, reject) => {
                resolve(`Mall ${name} was deleted, Response : ${response}`)
            })
        }
        catch(e: any) {
            console.log("error", e, e.response)
            return e
        }
    }

    async getUsers(): Promise<User[]> {
        try{
            const users : User[] = await UserModel.find()
            console.log("users", users)
            return new Promise((resolve, reject) => {
                resolve(users)
            })
        }
        catch(e : any) {
            console.log("error", e, e.response)
            return e
        }
    }

    async createIndexRedis(indexName : string): Promise<String> {
        try {
            const index = await redisClient.ft.create(indexName, {
                'name': {
                    type: "TEXT",
                },
                'phone': {
                    type: "TEXT",
                },
                'website': {
                    type: "TEXT",
                },
                'city' : {
                    type: "TEXT",
                },
                'state' : {
                    type: "TEXT",
                },
                'country' : {
                    type: "TEXT",
                },
                'lat' : {
                    type: "TEXT",
                },
                'lng' : {
                    type: "TEXT",
                },
                'size_sqft' : {
                    type: "NUMERIC",
                },
                'stores_count' : {
                    type: "NUMERIC",
                },
                'rating' : {
                    type: "NUMERIC",
                },
                'opening_hours' : {
                    type: "TEXT",
                },
                }, {
                ON: 'JSON',
                PREFIX: 'doc:'
            });
            console.log("index", index)
            return new Promise( (resolve, reject) => {
                resolve("Index was created")
            })
        }
        catch(e : any) {
            console.log("error", e, e.response)
            return e
        }        
    }
}