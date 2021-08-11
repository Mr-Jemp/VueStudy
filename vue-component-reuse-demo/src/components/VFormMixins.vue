<template>
  <div class="VFormMixins">
    <input type="text" v-model="inputVal" @blur="validate(inputVal)">
    <div>{{msg}}</div>
  </div>
</template>

<script>
import validateMixin from '../mixins/validate'

export default {
  name: 'VFormMixins',
  mixins: [validateMixin],
  data() {
    return {
      inputVal: '555'
    }
  },
  mounted() {
  }
}
</script>

<style>

</style>