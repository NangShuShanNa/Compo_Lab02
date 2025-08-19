<script setup lang="ts">
import {ref ,defineProps} from 'vue'
import { type Event } from '../../types';
const props=defineProps<{
  event:Event
    id:String

  }>()
</script>
<template>
    <p>{{ event.time }} on {{ event.date }}@ {{ event.location }}</p>
    <p>{{ event.description }}</p>
</template>