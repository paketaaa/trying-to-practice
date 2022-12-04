import Vue from 'vue';
import VueMq from 'vue-mq';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');

Vue.use(VueMq, {
  breakpoints: { // default breakpoints - customize this
    sm: 450,
    md: 1250,
    lg: Infinity
  },
  defaultBreakpoint: 'sm' // customize this for SSR
});
