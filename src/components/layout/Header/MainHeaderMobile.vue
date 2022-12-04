<template>
  <div class="header-main header-main--mobile">
    <button type="button" class="header__burger">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <VueLogo
      :width="24"
      :height="24"
      class="header-main__logo"
    />
  </div>
</template>

<script>
import VueLogo from '../../VueLogo.vue';
export default {
  name: 'MainHeaderMobile',
  components: {
    VueLogo
  }
};
</script>

<style lang="scss">

</style>
