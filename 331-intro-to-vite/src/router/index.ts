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
import nProgress from 'nprogress'
import EventService from '../services/EventService'
import { useEventStore } from '../stores/event'   // ✅ import your store

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
    beforeEnter: (to) => {
      const id = parseInt(to.params.id as string)
      const store = useEventStore()  // ✅ get store instance
      return EventService.getEvent(id)
        .then((response) => {
          store.setEvent(response.data)   // ✅ save to store
        })
        .catch((error) => {
          if (error.response && error.response.status === 404) {
            return {
              name: '404-resource-view',
              params: { resource: 'event' }
            }
          } else {
            return { name: 'network-error-view' }
          }
        })
    },
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
    path: '/network-error',
    name: 'network-error-view',
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
 scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition   // ✅ go back to previous scroll
    } else {
      return { top: 0 }      // ✅ default scroll to top
    }
  }
})

router.beforeEach(() => {
  nProgress.start()
})
router.afterEach(() => {
  nProgress.done()
})

export default router
