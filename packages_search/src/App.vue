<template>
  <div id="app">
    <Search />
    <Packages />
  </div>
</template>

<script>
import Search from './components/search.vue'
import Packages from './components/packages'

export default {
  name: 'App',
  components: {
    Search,
    Packages
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
