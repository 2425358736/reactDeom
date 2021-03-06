import axios from 'axios'

const qs = require('qs')

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:8484/'

// get查询
export const apiGet = (url) => {
    return new Promise((resolve, reject) => {
        axios.get(url).then(
            (response) => {
                const resulData = response.data
                resolve(resulData)
            },
        ).catch((error) => {
            reject(error)
        })
    })
}

// post查询
export const apiPost = (url, parameter) => {
    return new Promise((resolve, reject) => {
        axios.post(url, qs.stringify({ ...parameter })).then(
            (response) => {
                const resulData = response.data
                console.log(resulData)
                if (resulData.code === '-999') {
                    window.location.href = '/login'
                }
                resolve(resulData)
            },
        ).catch((error) => {
            reject(error)
        })
    })
}
