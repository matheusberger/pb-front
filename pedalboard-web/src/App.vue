<script setup lang="ts">
import Home from './components/Home.vue'
</script>

<template>
  <div>
    <header>
      <h1>Welcome to PedalBoard!</h1>
    </header>
    <div class="content"> 
      <Home/>
    </div>
  </div>
</template>

<style>
header {
  display: flex;
  flex:10%;
};

.content {
  display: flex;
  flex-direction: column;
  flex: 80%;
}
</style>
