import { createRouter, createWebHistory } from 'vue-router'
import Eventlist from '../components/Eventlist.vue'
import AboutView from '../views/AboutView.vue'
import StudentView from '../views/StudentView.vue'
import EventDetailView from '../views/event/EventDetailView.vue'
import RegisterView from '../views/event/RegisterView.vue'
import EditView from '../views/event/EditView.vue'
import EventLayoutView from '../views/event/LayoutView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import NetworkErrorView from '../views/NetworkErrorView.vue'

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
  { path: '/detail', name: 'Detail', component: StudentView },

  // NESTED ROUTES for event
  {
    path: '/event/:id',
    name: 'event-layout-view',
    component: EventLayoutView,
    props: true,
    children: [
      {
        path: '',
        name: 'event-detail-view',
        component: EventDetailView,
        props: true
      },
      {
        path: 'register',
        name: 'event-register-view',
        component: RegisterView,
        props: true
      },
      {
        path: 'edit',
        name: 'event-edit-view',
        component: EditView,
        props: true
      }
    ]
  },

  // ⬇️ NotFound must be root-level
{
  path: '/404/:resource',
  name: '404-resource-view',
  component: NotFoundView,
  props: true
},
{
  path:'/network-error',
  name:'network-error-view',
  component: NetworkErrorView
},
{
  path: '/:catchAll(.*)',
  name: 'not-found',
  component: NotFoundView
}


]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
