<template>
  <header class="header">
    <MainHeader/>
  </header>
</template>

<script>
import MainHeader from './MainHeader.vue';

export default {

  components: { MainHeader },
  name: 'theHeader',

  data () {
    return {
      height: this.offsetHeight
    };
  },

  methods: {
    calculateBodyPadding () {
      const HEADER_HEIGHT = this.$el.offsetHeight;
      console.log(HEADER_HEIGHT);
      document.querySelector('body').style.paddingTop = `${HEADER_HEIGHT}px`;
    }
  },

  mounted () {
    // FIXME: Работает только с таймаутом, без таймаута при первой загрузке был неправильный паддинг
    setTimeout(() => {
      this.calculateBodyPadding();
    }, 1);

    window.addEventListener('resize', () => {
      this.calculateBodyPadding();
    });
  }
};
</script>

<style lang="scss">
  @import "../../../assets/styles/common/variables.scss";
  .header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 20;

    &__burger {
      position: relative;
      width: 24px;
      height: 16px;
      background: #fff;
      border: none;

      span {
        width: 100%;
        height: 3px;
        background: $Rubin;

        position: absolute;
        left: 0;

        &:nth-child(1) {
          top: 0;
        }

        &:nth-child(2) {
          top: 50%;
          transform: translateY(-50%);
        }

        &:nth-child(3) {
          top: 100%;
          transform: translateY(-100%);
        }
      }
    }
  }
</style>
