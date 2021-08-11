<template>
  <div id="app">
    <p>mixins:</p>
    <v-form-mixins />

    <p>HOC:</p>
    <hoc-form />

    <p>Renderless:</p>
    <v-form-renderless #default="{validate}">
      <input type="text" v-model="inputVal" @blur="validate(inputVal)">
    </v-form-renderless>
  </div>
</template>

<script>
import VFormMixins from "@/components/VFormMixins.vue";
import VFormHOC from "@/components/VFormHOC";
import { WithValidate } from "@/hoc/withValidate.js";
import VFormRenderless from './renderless/VFormRenderless.vue';

let HocForm = WithValidate(VFormHOC);

export default {
  name: "App",
  components: {
    VFormMixins,
    HocForm,
    VFormRenderless,
  },
  data() {
    return {
      inputVal: 333
    }
  },
};
</script>

<style>
</style>
