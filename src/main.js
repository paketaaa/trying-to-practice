import Vue from 'vue';
import Multiselect from 'vue-multiselect';
import VueMq from 'vue-mq';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(VueMq, {
  breakpoints: {
    mobile: 576,
    tablet: 1150,
    desktop: Infinity
  },
  defaultBreakpoint: 'desktop' // customize this for SSR
});

Vue.component('MultiSelect', Multiselect);

new Vue({
  render: h => h(App)
}).$mount('#app');
