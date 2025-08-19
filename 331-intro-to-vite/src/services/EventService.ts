import axios from 'axios'
import type { Event } from '@/types/Event'

// setup axios instance
const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/NangShuShanNa/mock-event',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
    getEvents(perPage: number, page: number) {
    return apiClient.get('/events?_limit='+ perPage +'&_page='+ page)
  },
  getEvent(id: number) {
    return apiClient.get<Event>('/events/' + id)  // 👈 Single Event
  }
}
