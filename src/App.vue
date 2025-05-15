<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';
</script>

<template>
  <AppHeader />
  <main class="main">
    <RouterView />
  </main>
</template>
