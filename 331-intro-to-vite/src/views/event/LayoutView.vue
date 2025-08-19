<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <nav>
      <RouterLink :to="{ name: 'event-detail-view' }">Details</RouterLink> |
      <RouterLink :to="{ name: 'event-register-view' }">Register</RouterLink> |
      <RouterLink :to="{ name: 'event-edit-view' }">Edit</RouterLink>
    </nav>

    <!-- Pass event down as prop -->
    <RouterView :event="event" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { type Event } from '../../types'
import EventService from '../../services/EventService'

// Store event object
const event = ref<Event | null>(null)

// Get event by id from route param
import { useRoute } from 'vue-router'
const route = useRoute()

onMounted(() => {
  EventService.getEvent(parseInt(route.params.id as string))
    .then((response) => {
      event.value = response.data
    })
    .catch((error) => {
      console.error('There was an error!', error)
    })
})
</script>
