<template>
  <div id="app">
    <TheHeader/>
    <div class="container">
      <MainFilter/>
    </div>
  </div>
</template>

<script>
import TheHeader from './components/layout/Header/TheHeader.vue';
import MainFilter from './components/Filter/MainFilter.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    MainFilter
  },

  computed: {
    isMobile () {
      return this.$mq;
    }
  },

  mounted () {
  },

  methods: {
  }
};
</script>

<style lang="scss">
@import "./assets/styles/common/variables.scss";
@import "./assets/styles/common/normalize.scss";
@import "./assets/styles/components/multiselect.scss";

.container {
  padding: 40px 20px;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}

.filter {
  max-width: 100%;
}
</style>
