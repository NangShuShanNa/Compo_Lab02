<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { type Event } from '../../types'
import EventService from '../../services/EventService'
import { useRoute, useRouter } from 'vue-router'

const event = ref<Event | null>(null)
const route = useRoute()
const router = useRouter()

onMounted(() => {
  EventService.getEvent(parseInt(route.params.id as string))
    .then((res) => {
      event.value = res.data
    })
    .catch((error) => {
      if (error.response?.status === 404) {
        router.push({ name: '404-resource-view', params: { resource: 'event' } })
      } else {
        router.push({ name: 'network-error-view' })
      }
    })
})
</script>

<template>
  <div>
    <h1>Event Layout</h1>

    <!-- 🔗 Add links to children -->
    <nav v-if="event">
      <router-link
        :to="{ name: 'event-detail-view', params: { id: event.id } }"
      >
        Details
      </router-link>
      |
      <router-link
        :to="{ name: 'event-register-view', params: { id: event.id } }"
      >
        Register
      </router-link>
      |
      <router-link
        :to="{ name: 'event-edit-view', params: { id: event.id } }"
      >
        Edit
      </router-link>
    </nav>

    <router-view v-if="event" :event="event" />
    <p v-else>Loading event...</p>
  </div>
</template>
