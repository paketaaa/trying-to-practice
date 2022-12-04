<template>
<div class="filter">
  <VSelect
    :options="values"
  />
</div>
</template>

<script>
import VSelect from './VSelect.vue';

export default {
  name: 'MainFilter',

  components: {
    VSelect
  },

  data () {
    return {
      value: '',
      values: [
        'Все',
        'Недвижимость',
        'Ноутбуки',
        'Фотоаппараты',
        'Автомобили',
        'Все1',
        'Недвижимость1',
        'Ноутбуки1',
        'Фотоаппараты1',
        'Автомобили1'
      ]
    };
  }
};
</script>

<style lang="scss">

</style>
