import axios from 'axios'

// create an axios instance
const service = axios.create({
    baseURL: import.meta.env.API_BASEURL, // url = base url + request url
    withCredentials: true, // send cookies when cross-domain requests
    // timeout: 20000, // request timeout
    headers: {
        'Accept': 'application/json'
    }
})