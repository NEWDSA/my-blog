import axios from 'axios'
const reqrb=axios.create({
    baseURL:process.env.VUE_APP_ROBOT_API,
    timeout:5000
})

reqrb.interceptors.request.use(config=>{
    return config
},error=>{
    return Promise.reject(error)
})

reqrb.interceptors.response.use(res=>{
    return res
},error=>{
    return Promise.reject(error)
})


export default reqrb