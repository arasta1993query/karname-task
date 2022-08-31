import axios from 'axios'

// create an axios instance
const service = axios.create({
    baseURL: import.meta.env.VITE_API_BASEURL, // url = base url + request url
    withCredentials: true, // send cookies when cross-domain requests
    // timeout: 20000, // request timeout
    headers: {
        'Accept': 'application/json'
    }
})

export const getPosts = () => {
    return service.request({
        method: "get",
        url: '/posts'
    })
}

export const getPost = (params) => {
    return service.request({
        method: "get",
        url: `/posts/${params}`,
    })
}

export const createPost = (data) => {
    return service.request({
        method: "post",
        url: `/posts`,
        data
    })
}

export const getComments = (params) => {
    console.log(params , 'params')
    return service.request({
        method: "get",
        url: `/comments`,
        params
    })
}

export const createComment = (data) => {
    return service.request({
        method: "post",
        url: `/comments`,
        data
    })
}

export const updateComment = ({id , data}) => {
    return service.request({
        method: "put",
        url: `/comments/${id}`,
        data
    })
}

export const getUsers = () => {
    return service.request({
        method: "get",
        url: `/users`,
    })
}

export const getUser = (id) => {
    return service.request({
        method: "get",
        url: `/users/${id}`,
    })
}
