<template>
  <div>
    <MainHeaderDesktop
      v-show="$mq === 'desktop'"
    />
    <MainHeaderMobile
      v-show="$mq !== 'desktop'"
    />
  </div>
</template>

<script>
import MainHeaderDesktop from './MainHeaderDesktop.vue';
import MainHeaderMobile from './MainHeaderMobile.vue';

export default {
  name: 'MainHeader',

  components: {
    MainHeaderDesktop,
    MainHeaderMobile
  }
};
</script>

<style lang="scss">
@import "../../../assets/styles/common/variables.scss";
@import "../../../assets/styles/common/mixins.scss";
.header-main {
  background: #fff;
  padding: 12px 24px;
  border-bottom: 1px solid $Gray400;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  &__logo {
    width: 32px;
    height: 32px;
    margin-left: auto;
  }

  &__list {
    display: flex;
  }

  &__item {
    padding: 10px 12px;
  }

  &__link {
    transition: color 0.3s ease-in-out;
    @include hover() {
      color: $Rubin;
    }
  }

  @include respond-to(lTablet) {
    padding: 8px 16px;
  }
}
</style>
