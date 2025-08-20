<script setup lang="ts">
import { type Event } from '@/types'
import EventCard from './EventCard.vue'
import { onMounted, ref,computed ,watchEffect} from 'vue'
import axios from 'axios'
import EventService from '../services/EventService'
import EventInfo from './EventInfo.vue'  

const events = ref<Event[]| null>(null) 
const totalEvents=ref(0)
const hasNextPage=computed(()=>{
    const totalPages=Math.ceil(totalEvents.value/3)
    return page.value < totalPages
})
const props=defineProps({
    page:{
        type:Number,
        required:true
    }
})
const page=computed(()=> props.page)
onMounted(()=>{
   watchEffect(()=>{
  
     EventService.getEvents(3,props.page)
    .then((response) => {
      events.value = response.data // 👈 update events list
      totalEvents.value=response.headers['x-total-count']//server tells us how many events exist in total.
}) // 👈 old sample data removed
     .catch((error)=>{
        console.error('There was an error!',error)
     })
  
   })
    })
</script>
<template>
  <h1>Events For Good</h1>
  <div class="flex flex-col items-center">
    <!-- Show each event with EventCard -->
    <EventCard 
      v-for="event in events" 
      :key="event.id" 
      :event="event" 
    />
    <RouterLink
    id="page-prev"
        :to="{ name: 'event-list-view', query: { page: page - 1 } }"
    rel="prev"
    v-if="page != 1"
    
  >&#60;
    Prev Page
  </RouterLink>

  <RouterLink
     id="page-next"
    :to="{ name: 'event-list-view', query: { page: page + 1 } }"
    rel="next"
    v-if="hasNextPage"

  >
    Next Page &#62;
  </RouterLink>

  </div>
</template>
<style scoped>
.pagination {
  display: flex;
  width: 290px;
}

.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
