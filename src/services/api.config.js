import axios from 'axios'

export default axios.create({
  baseURL: 'http://86.216.221.246:5001/api',
  timeout: 1000,
})
