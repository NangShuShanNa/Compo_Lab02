import { createRouter, createWebHistory } from 'vue-router'
import Eventlist from '../components/Eventlist.vue'
import AboutView from '../views/AboutView.vue'
import StudentView from '../views/StudentView.vue'
import EventDetailView from '../views/EventDetailView.vue'

const routes = [
  { 
  path: '/', 
  name: 'event-list-view', 
  component: Eventlist,
  props: (route) => ({
    page: parseInt(route.query.page?.toString() || '1')
  })
},

  { path: '/about', name: 'About', component: AboutView },
    { path: '/detail', name: 'Detail', component: StudentView},
    { path: '/event/:id', name: 'event-detail-view', component: EventDetailView,props:true},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
