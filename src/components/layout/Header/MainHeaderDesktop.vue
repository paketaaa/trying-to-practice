<template>
  <div class="header-main header-main--desktop">
    <ul class="header-main__list">
      <li class="header-main__item">
        <a href="#" class="header-main__link">Home</a>
      </li>
      <li class="header-main__item">
        <span class="header-main__prelink">About</span>
      </li>
      <li class="header-main__item">
        <span class="header-main__prelink">FAQ</span>
      </li>
    </ul>
    <VueLogo
      class="header-main__logo"
      :width="48"
      :height="48"
    />
  </div>
</template>

<script>
import VueLogo from '../../VueLogo.vue';

export default {
  name: 'MainHeaderDesktop',

  components: {
    VueLogo
  }
};
</script>

<style lang="scss">

</style>
