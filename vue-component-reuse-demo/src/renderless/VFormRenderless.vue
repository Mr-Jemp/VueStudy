<template>
  <div class="v-form-renderless">
    <slot :validate="validate"></slot>
    <div>{{msg}}</div>
  </div>
</template>

<script>
export default {
  name: 'v-form-renderless',
  data() {
    return {
      msg: '',
    }
  },
  methods: {
    validate(value) {
      console.log(value)
      if (value) {
        this.msg = "";
      } else {
        this.msg = "请输入内容";
      }
    },
  },
}
</script>

<style>

</style>