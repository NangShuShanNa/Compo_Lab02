<script setup lang="ts">
import { defineProps } from 'vue'
import { type Event } from '../../types'
import { useRouter } from 'vue-router'
import { useMessageStore } from '../../stores/message'

// ✅ define props
const props = defineProps<{ event: Event }>()

// ✅ router + store
const router = useRouter()
const store = useMessageStore()

// ✅ register function
const register = () => {
  // (simulate successful registration)
  store.updateMessage(`You are successfully registered for ${props.event.title}`)

  // clear flash message after 3s
  setTimeout(() => {
    store.resetMessage()
  }, 3000)

  // redirect back to event details
  router.push({ name: 'event-detail-view', params: { id: props.event.id } })
}
</script>

<template>
  <div>
    <p>Register here for: {{ event.title }}</p>
    <button @click="register">Register</button>
  </div>
</template>
