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

::-webkit-scrollbar {
    width: 6px;
    height: 6px;
} 
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(120,120,120,0.3); 
} 
::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2); 
}
div, span, ul, ol, dl, header, section, footer {
  cursor: default;
  user-select: none;
}

html, body {
    font-size: 100%;
    padding: 0;
    margin: 0;
    height: 100%;
}
</style>
