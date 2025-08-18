<script setup lang="ts">
import type { Student } from '@/types'

defineProps<{ student: Student }>()
</script>

<template>
  <div class="card">
    <h3>{{ student.name }} {{ student.surname }}</h3>
    <p>GPA: {{ student.gpa }}</p>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  width: 220px;
  background: #f9f9f9;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
</style>
