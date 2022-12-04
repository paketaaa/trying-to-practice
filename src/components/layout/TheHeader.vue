<template>
  <header class="header">
    <MainHeader/>
  </header>
</template>

<script>
import MainHeader from './Header/MainHeader.vue';

export default {

  components: { MainHeader },
  name: 'theHeader',

  methods: {
    isMobile1 () {
      return window.matchMedia('(max-width: 1150px)').matches;
    },

    calculateBodyPadding () {
      const HEADER_HEIGHT = document.querySelector('.header').offsetHeight;
      console.log(HEADER_HEIGHT);
      document.querySelector('body').style.paddingTop = `${HEADER_HEIGHT}px`;
    }
  },

  mounted () {
    this.calculateBodyPadding();
  }
};
</script>

<style lang="scss">
  @import "../../assets/styles/common/variables.scss";
  .header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 20;
  }
</style>
