<template>
  <div class="VFormHOC">
    <input type="text" v-model="value" @blur="$emit('blur', value)">
  </div>
</template>

<script>
export default {
  name: 'VFormHOC',
  props: ['initValue'],
  data() {
    return {
      value: this.initValue
    }
  },
  methods: {
    
  }
}
</script>

<style>

</style>