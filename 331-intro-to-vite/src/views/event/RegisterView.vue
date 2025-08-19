<script setup lang="ts">
import { toRefs, defineProps } from 'vue'
import { type Event } from '@/types'

// Expect the whole event object from router props
const props = defineProps<{
  event: Event
}>()

// make event reactive
const { event } = toRefs(props)
</script>

<template>


  <p>Register here</p>
</template>
