<script setup lang="ts">
import { defineProps } from 'vue'
import { type Event } from '../../types'

const props = defineProps<{ event: Event }>()
</script>

<template>
  <div>
    <h2>{{ event.title }}</h2>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
    <p>Organized by: {{ event.organizer }}</p>
    <p v-if="event.petsAllowed">🐾 Pets are allowed</p>
  </div>
</template>
