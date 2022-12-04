<template>
  <img alt="Vue logo" class="vue-logo" src="../assets/logo.png"
    :style="{width: this.width + 'px', height: this.height + 'px'}"
  >
</template>

<script>

export default {
  name: 'VueLogo',

  props: {
    width: {
      type: Number,
      default: 32
    },
    height: {
      type: Number,
      default: 32
    }
  },

  data () {
    return {
    };
  }
};

</script>

<style lang="scss">

</style>
