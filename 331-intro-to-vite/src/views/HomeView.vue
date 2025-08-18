<script setup lang="ts">
import EventCard from '../components/EventCard.vue';
import EventInfo from '../components/EventInfo.vue';
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
    <EventInfo
     v-for="event in events"
     :key="event.id + '-info'"
     :event="event"
     />

  </div>
</template>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;

}
</style>