<template>
  <div>
    <h3 is="sui-header" dividing>Cloak of Darkness</h3>
    <sui-comment-group class="history" v-for="item in $store.getters.history">
      <!-- <sui-comment>
        <sui-comment-text>
          Hurrying through the rainswept November night, you're glad to see the
          bright lights of the Opera House.
          It's surprising that there aren't more
          people about but, hey, what do you expect in a cheap demo game...?
        </sui-comment-text>
      </sui-comment>

      <sui-comment>
        <sui-comment-text>
          <b>>>> Inventory</b>
        </sui-comment-text>
      </sui-comment>

      <sui-comment>
        <sui-comment-text>
          <i>You're carrying a velvet cloak.</i>
        </sui-comment-text>
      </sui-comment> -->

      <sui-comment>
        <sui-comment-text>
          <!-- if item.type == "bold" ... -->
          {{item.text}}
        </sui-comment-text>
      </sui-comment>
    </sui-comment-group>
  </div>
</template>

<script>
export default {
  name: "History",
  mounted() {
    this.$store.commit("launch")
  }
};

import Vue from "vue";
import SuiVue from "semantic-ui-vue";

Vue.use(SuiVue);
</script>

<style>
.history {
  text-align: left;
  min-height: 95%;
}
</style>
