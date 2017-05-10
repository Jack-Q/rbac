<template>
  <div id="app">
    <main-frame></main-frame>
  </div>
</template>

<script>
import MainFrame from './components/MainFrame';

export default {
  name: 'app',
  components: {
    MainFrame,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
