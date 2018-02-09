import axios from 'axios'
import {eventHub} from 'eventhub'

function createAxios() {
    const axios = axios.create({
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