<script setup lang="ts">
import type {Event} from '@/types'

defineProps<{
 event:Event
}>()
</script>
<template>
    <div class="event-info">
        <p>{{ event.category }}</p>
        <p>{{ event.organizer }}</p>
    </div>
</template>
<style scoped>
    .event-info{
        text-emphasis: center;
        font-size: 16px;
    }
</style>