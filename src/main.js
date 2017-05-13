// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import KeenUI from 'keen-ui';
import 'keen-ui/dist/keen-ui.css';

import store from '~/store';

import App from './App';

Vue.use(KeenUI);
Vue.config.productionTip = false;

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  data: store,
  template: '<App/>',
  components: { App },
});
