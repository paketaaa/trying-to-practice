<template>
<div class="multiselect-filter">
  <MultiSelect
    :options="this.$attrs.values"
    :value="selectedOptions"
    :max-height="maxHeight"
    :searchable="false"
    :show-labels="false"
    :show-pointer="false"
    :hide-selected="false"
    :close-on-select="true"
    :placeholder="placeholder"
    :label="label"
    open-direction="bottom"
  >
    <template slot="selection" slot-scope="{ values }">
      <div v-if="values.length" class="multiselect-filter__label-list">
          {{ labels }}
      </div>
    </template>
  </MultiSelect>
  <select
    v-show="$deviceIs.mobile"
    v-model="mobSelectVal"
    :multiple="multiple"
    :disabled="isDisabled"
    class="multiselect-filter__select"
    @click="onSelectClick"
  >
    <option
      v-for="option in options"
      :key="option[trackBy]"
      :value="option[trackBy]"
      :disabled="option.$isDisabled"
    >
      {{ option[label] }}
    </option>
  </select>
</div>
</template>

<script>
export default {
  name: 'VSelect',

  props: {
    value: {
      type: [Array, String, Number],
      default: null
    },

    maxHeight: {
      type: Number,
      default: 300
    },

    placeholder: {
      type: String,
      default: null
    },

    filterLabel: {
      type: String,
      default: null
    },

    group: {
      type: Boolean,
      default: false
    },

    groupLabel: {
      type: String,
      default: ''
    },

    groupValues: {
      type: String,
      default: ''
    },

    multiple: {
      type: Boolean,
      default: false
    },

    allowEmpty: {
      type: Boolean,
      default: true
    },

    closeOnSelect: {
      type: Boolean,
      default: false
    },

    isSelectTouched: {
      type: Boolean,
      default: true
    },

    hasTooltip: {
      type: Boolean,
      default: false
    },

    hideDisabled: {
      type: Boolean,
      default: false
    },

    isDisabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
