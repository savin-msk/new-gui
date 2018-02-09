import axios from 'axios'
import {eventHub} from './eventhub.js'

function createAxios() {
    var reader = axios.create({
        baseURL: 'https://lxd.avenu77.ru:9000'
    })
    reader.interceptors.request.use(
        conf => {
            eventHub.$emit('before-request')
            return conf
        },
        error => {
            eventHub.$emit('request-error')
            return Promise.reject(error)
        }
    )
    reader.interceptors.response.use(
        response => {
            eventHub.$emit('after-response')
            return response
        },
        error => {
            eventHub.$emit('response-error')
            return Promise.reject(error)
        }
    )
    return reader
}

export const HTTPS =  createAxios()