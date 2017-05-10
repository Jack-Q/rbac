<template>
  <div id="app">
    <main-frame></main-frame>
  </div>
</template>

<script>
import MainFrame from './components/main-frame';

export default {
  name: 'app',
  components: {
    MainFrame,
  },
};
</script>

<style>
#app {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 40px;
  font-size: 18px;
  height: 100%;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

html, body {
    font-size: 100%;
    padding: 0;
    margin: 0;
    height: 100%;
}
</style>
