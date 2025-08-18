<script setup lang="ts">
import EventCard from '../components/EventCard.vue';
import type { Event } from '@/types';
import events from '../events.json'

</script>

<template>
  <div class="home">
    <EventCard 
      v-for="event in events" 
      :key="event.id" 
      :event="event" 
    />
  </div>
</template>
