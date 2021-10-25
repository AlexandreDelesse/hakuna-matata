import axios from 'axios'

export default axios.create({
  baseURL: process.env.API_URL || 'http://15.236.39.1:5001/api',
  timeout: 1000,
})

// 15.236.39.1
