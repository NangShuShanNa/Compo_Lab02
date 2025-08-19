<script setup lang="ts">
import { defineProps } from 'vue'
import { type Event } from '../../types'
import { useRouter } from 'vue-router'
import { useMessageStore } from '../../stores/message'

const props = defineProps<{ event: Event }>()
const router = useRouter()
const store = useMessageStore()

const edit=()=>{
  store.updateMessage(`Your data is successfuly updated ${props.event.title}`)

    setTimeout(() => {
    store.resetMessage()
  }, 2000)

    router.push({ name: 'event-detail-view', params: { id: props.event.id } })
    }
</script>


<template>
    <p>Edit Event: {{ event.title }}</p>
        <button @click="edit">Edit</button>

</template>
