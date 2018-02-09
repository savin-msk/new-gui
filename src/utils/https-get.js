import { eventHub } from 'eventhub'
import axios from 'axios'

function createAxios() {
    const axios = Axios.create({
        baseURL: 'https://lxd.avenu77.ru:9000'
    });
    axios.interceptors.request.use(
        conf => {
            eventHub.$emit('before-request');
            return conf;
        },
        error => {
            eventHub.$emit('request-error');
            return Promise.reject(error);
        }
    );
    axios.interceptors.response.use(
        response => {
            eventHub.$emit('after-response');
            return response;
        },
        error => {
            eventHub.$emit('response-error');
            return Promise.reject(error);
        }
    );
    return axios;
}

export const HTTPS =  createAxios()