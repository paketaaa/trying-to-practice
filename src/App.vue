<template>
  <div id="app">
    <TheHeader/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import TheHeader from './components/layout/TheHeader.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    TheHeader
  },

  data () {
    return {
      isMobile: null
    };
  },

  mounted () {
    this.handleisMobile();
  },

  methods: {
    handleisMobile () {
      if (window.matchMedia('(max-width: 1150px)').matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }

      window.addEventListener('resize', () => {
        if (window.matchMedia('(max-width: 1150px)').matches) {
          this.isMobile = true;
        } else {
          this.isMobile = false;
        }
      });
      console.log(this.$root);
      // this.$root.isMobile = this.isMobile;
    }
  }
};
</script>

<style lang="scss">
@import "./assets/styles/common/variables.scss";
@import "./assets/styles/common/normalize.scss";
</style>
