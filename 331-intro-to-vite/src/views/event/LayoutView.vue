<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useEventStore } from '../../stores/event'
import { storeToRefs } from 'pinia'
import EventService from '../../services/EventService'

// router + route
const router = useRouter()
const route = useRoute()

// pinia store
const store = useEventStore()
const { event } = storeToRefs(store)

// load data when mounted
onMounted(() => {
  EventService.getEvent(parseInt(route.params.id as string))
    .then((response) => {
      store.setEvent(response.data)   // <<<<< ✅ put data into Pinia
    })
    .catch((error) => {
      if (error.response && error.response.status === 404) {
        router.push({
          name: '404-resource-view',
          params: { resource: 'event' }
        })
      } else {
        router.push({ name: 'network-error-view' })
      }
    })
})
</script>

<template>
  <div>
    <h1>Event Layout</h1>

    <nav v-if="event">
      <router-link :to="{ name: 'event-detail-view', params: { id: event.id } }">Details</router-link> |
      <router-link :to="{ name: 'event-register-view', params: { id: event.id } }">Register</router-link> |
      <router-link :to="{ name: 'event-edit-view', params: { id: event.id } }">Edit</router-link>
    </nav>

    <router-view v-if="event" :event="event" />
    <p v-else>Loading event...</p>
  </div>
</template>
