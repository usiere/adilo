<template>
  <div id="app">
    <TopBar />
    <router-view />
  </div>
</template>

<script>
import TopBar from './components/layout/TopBar.vue'

export default {
  name: 'App',
  components: {
    TopBar,
  },
}
</script>

<style>

</style>
