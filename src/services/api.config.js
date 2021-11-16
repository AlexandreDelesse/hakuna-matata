import axios from 'axios'

export default axios.create({
  baseURL: process.env.API_URL || 'http://localhost:5001/api',
  timeout: 1000,
})

// 13.38.2.217
