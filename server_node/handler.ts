import {Request, Response, NextFunction} from 'express'
import express from 'express'
import dotenv from 'dotenv'
import { handleInteractor } from './handlerInteractor'
import { HttpService } from './HttpService'
import { AxiosInstance } from 'axios'
import redisClient from './redis'
import cors from 'cors'
import { Mall } from './interfaces/interfaces'

dotenv.config({ path: './utils/.env' })

const baseUrl : string = String(process.env.BASEURL)
const httpService : HttpService = new HttpService(baseUrl)
const axiosClient : AxiosInstance = httpService.createAxiosInstance()
const interactor : handleInteractor = new handleInteractor(axiosClient)

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.post('/createIndexRedis/:name', async (req : Request, res : Response, next : NextFunction) => {
    try {
        const indexName : string = req.params.name
        console.log("indexName", req.params.name)
        const indexCreated = await interactor.createIndexRedis(indexName)
        console.log("indexName", indexCreated)
        res.status(200).send("Redis Index was created")      
    }
    catch(e : any) {
        console.log("error", e, e.response)
        return e
    }
})


app.get('/malls', async (req : Request, res : Response, next : NextFunction) => {
    try {
        const malls : Mall[] = await interactor.getMalls()
        console.log("malls Received", malls)
        await redisClient.hSet('malls', 'malls', JSON.stringify(malls))
        console.log("malls" , await redisClient.hGetAll('malls'))
        res.status(200).send(await interactor.getMalls())
    }
    catch(e : any) {
        console.log("error", e, e.response)
        return e
    }   
})



app.patch('/mall', async (req : Request, res : Response, next : NextFunction) => {
    try {
        console.log("BODY", req.query.mall, req.body)
        const initialName : string = String(req.query.mall)
        const reqBody = JSON.stringify(req.body)
        const reqBodyParsed = JSON.parse(reqBody)
        const adjustedName : string = reqBodyParsed?.name ? reqBodyParsed.name : ""
        res.status(200).send(await interactor.setMallName(initialName, adjustedName))
    }
    catch(e: any) {
        console.log("error", e)
        return e
    }
})

app.delete('/mall/:name', async (req : Request, res : Response, next : NextFunction) => {
    try {
        const name : string = req.params.name
        console.log("BODY", req.params.name)
        res.status(200).send(await interactor.deleteMallByName(name))
    }
    catch(e : any) {
        console.log("error", e)
        return e
    }
})

app.get('/users', async (req : Request, res : Response, next : NextFunction) => {
    try {
        res.status(200).send(await interactor.getUsers())
    }
    catch(e : any) {
        console.log("error", e, e.response)
        return e
    }   
})

app.get('/user/:accountName', async (req : Request, res : Response, next : NextFunction) => {
    try {
        const accountName : string = req.params.accountName
        res.status(200).send(await interactor.getUserByEmail(accountName))
    }
    catch(e : any) {
        console.log("error", e, e.response)
        return e
    }   
})

app.use(async (req : Request, res : Response, next : NextFunction) => {  
    try {
         if (redisClient.isOpen) {
            console.log('Redis is connected');
        } else {
            console.log('Redis is NOT connected');
        }
    }
    catch(e : any) {
        console.log("error", e)
        return e
    }
})

app.listen(process.env.port, () => {
    console.log(`Server running on port ${process.env.port}`);
})