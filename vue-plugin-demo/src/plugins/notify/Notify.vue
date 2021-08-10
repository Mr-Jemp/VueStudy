<template>
  <div class="notify" v-if="isShow">
    <div id="content" v-html="content"></div>
  </div>
</template>

<script>
export default {
  name: "notify",
  data() {
    return {
      isShow: false,
      content: "张三",
    };
  },
  methods: {
    notify(options) {
      this.isShow = true;
      setTimeout(() => {
        this.isShow = false;
      }, 2000)
      
      options && options.content && (this.content = options.content);
    },
  },
};
</script>

<style>
.notify #content {
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 999;
  width: 200px;
  height: 150px;
  border-radius: 5px;
  border: 1px solid #e5e5e5;
}
</style>