import Vue from 'vue'
import App from './App.vue'
import router from './router'


new Vue({
  el: "#app",
  data: {},
  render(callback) {
    return callback(App);
  },
  router
});
