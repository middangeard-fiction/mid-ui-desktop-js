<template>
<form @submit.prevent="input">
  <sui-grid :columns="1" divided>
    <sui-grid-row stretched>
      <sui-grid-column>
        <sui-input icon="map outline" v-model="inputText"/>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
  </form>
</template>

<script>

export default {
  name: "ParserInput",
  data() {
    return {
      inputText: ""
    };
  },
  mounted() {
    // console.log("TEST")
    // this.$store.commit("launch")
  },
  methods: {
    input() {
      this.$store.commit("input", this.inputText);
      this.inputText = ""
    }
  }
};

import Vue from "vue";
import SuiVue from "semantic-ui-vue";

Vue.use(SuiVue);
</script>
