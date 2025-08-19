<script setup lang="ts">
import {toRefs} from 'vue'
import { type Event } from '../../types';
const props=defineProps<{
  event:Event
}>()
    
</script>
<template>
   <p>Edit Event Here</p>
</template>