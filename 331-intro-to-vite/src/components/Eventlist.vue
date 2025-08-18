<script setup lang="ts">
import { Event } from '@/types'
import EventCard from './EventCard.vue'
import { onMounted, ref } from 'vue'
import axios from 'axios'
import EventService from '../services/EventService'

const events = ref<Event[]>([])  
onMounted(()=>{
    EventService.getEvents()
    .then((response) => {
      events.value = response.data // 👈 update events list
}) // 👈 old sample data removed
     .catch((error)=>{
        console.error('There was an error!',error)
     })
    })
</script>
<template>
  <h1>Events For Good</h1>
  <div class="home">
    <!-- Show each event with EventCard -->
    <EventCard 
      v-for="event in events" 
      :key="event.id" 
      :event="event" 
    />

    <!-- Optional: Show extra details -->
    <EventInfo
      v-for="event in events"
      :key="event.id + '-info'"
      :event="event"
    />
  </div>
</template>
<style>
</style>