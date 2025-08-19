<script setup lang="ts">
import { defineProps } from 'vue'
import { type Event } from '../../types'

const props = defineProps<{ event: Event }>()
</script>

<template>
  <p>Register here for: {{ event.title }}</p>
</template>
