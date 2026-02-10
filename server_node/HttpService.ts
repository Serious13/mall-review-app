import axios from 'axios'

export class HttpService {
    baseUrl : string
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl
    }  
    createAxiosInstance() {
        return axios.create({
            baseURL: this.baseUrl,        
            headers: {
                'Content-type': 'application/json'
                //'Authorization' : 'Bearer token'
            }
        })
    } 
}