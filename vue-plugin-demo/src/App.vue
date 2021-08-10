<template>
  <div id="app">
    <button @click="handleShow">显示</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods: {
    handleShow() {
      this.$notify({
        content: `<div id="a">123</div>`
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
