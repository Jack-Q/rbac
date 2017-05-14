<template>
  <div id="app">
    <main-frame></main-frame>
  </div>
</template>

<script>
import MainFrame from './components/main-frame';
import store from '~/store';

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
  height: 100%;
  overflow: hidden;
  font-size: 18px;
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
  -webkit-box-shadow: inset 0 0 6px rgba(120, 120, 120, 0.3);
}

::-webkit-scrollbar-thumb {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
}

div,
span,
ul,
ol,
dl,
header,
section,
footer {
  cursor: default;
  user-select: none;
}

html,
body {
  font-size: 100%;
  padding: 0;
  margin: 0;
  height: 100%;
  overflow: hidden;
  font-size: 15px;
}

@media screen and (max-width: 800px) {
  html,
  body {

    font-size: 13px;
  }
}

.tip {
  margin: 50px auto;
  font-size: 2em;
  font-weight: 100;
  color: #ccc;
}

/* Detial header */
.detail {
  text-align: left;
  padding: 30px 40px 0;
  max-width: 450px;
}

.actions {
  text-align: left;
  padding: 0 30px 0;
  border-bottom: 1px solid #eee;
  height: 40px;
  line-height: 40px;
  overflow-x: auto;
  display: flex;
}

.action-group {
  margin: 0 20px;
  display: flex;
}

.action-group .ui-select {
  flex: 1;
}
@media screen and (max-width: 1024px) {
  .detail {
    padding: 10px 5px 0;
  }
  .actions {
    padding: 0 5px 0;
  }
}
.action-panel {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 220px;
}
.action-item-list {
  overflow-y: auto;
  min-width: 150px;
  height: 100%;
  flex: 1;
}
</style>
