import axios from 'axios'

// setup axios instance
const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/NangShuShanNa/mock-event', // 👈 replace with your mock server url
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getEvents() {
    return apiClient.get('/events')
  },
}
