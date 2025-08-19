<script setup lang="ts">
import { useMessageStore } from '@/stores/message'
import { storeToRefs } from 'pinia'

const messageStore = useMessageStore()
const { message } = storeToRefs(messageStore)
</script>
<template>
  <div id="layout">
    <header>
      <div id="flashMessage" v-if="message"></div>
      <h4>{{ message }}</h4>
     
      <div class="wrapper">
        <nav>
         <RouterLink :to="{name:'event-list-view'}"> Home </RouterLink>
          |
          <RouterLink :to="{name:'About'}"> About </RouterLink>
          |
          <RouterLink :to="{name:'Detail'}"> Details </RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>


<style >
#layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50; 
  text-decoration: underline;
}

nav a.router-link-exact-active {
  color: #42b983;
}
h2{
  font-size: 20px;
}
@keyframes yellofade {
  from {
    background-color: yellow;
  }
  to {
    background-color: transparent;
  }
}

#flashMessage {
  animation: yellofade 3s ease-in-out;
  padding: 8px;
  margin-bottom: 12px;
  border-radius: 4px;
}
</style>
