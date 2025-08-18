<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Student } from '@/types'
import StudentService from '../services/StudentService'
import StudentInfo from '../components/StudentInfo.vue'

const students = ref<Student[]>([])

onMounted(() => {
  StudentService.getStudents()
    .then((response) => {
      students.value = response.data   // API returns array directly
    })
    .catch((err) => {
      console.error('Error loading students:', err)
    })
})
</script>

<template>
  <h1>Student Details</h1>

  <ul>
    <StudentInfo 
      v-for="s in students" 
      :key="s.id" 
      :student="s" 
    />
  </ul>
</template>
