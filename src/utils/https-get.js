import axios from 'axios'

export const HTTPS =  axios.create ({
    baseURL: 'https://192.168.0.60:9000'
})