<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { type Event } from '../../types'
import EventService from '../../services/EventService'
import { useRoute, useRouter } from 'vue-router'

const event = ref<Event | null>(null)

const route = useRoute()   // access :id from URL
const router = useRouter() // redirect if error

onMounted(() => {
  EventService.getEvent(parseInt(route.params.id as string))
    .then((response) => {
      event.value = response.data
    })
    .catch((error) => {
      if (error.response && error.response.status === 404) {
        // resource not found → send to 404 page
        router.push({
          name: '404-resource-view',
          params: { resource: 'event' }
        })
      } else {
        // network/server error
        router.push({ name: 'network-error-view' })
      }
    })
})
</script>

<template>
  <div>
    <h1>Event Layout</h1>

    <!-- show child route if event is loaded -->
    <router-view v-if="event" :event="event" />

    <!-- optional: simple loading state -->
    <p v-else>Loading event...</p>
  </div>
</template>
