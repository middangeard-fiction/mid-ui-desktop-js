import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    history: [],
  },
  mutations: {
    launch (state) {
      var connection = new WebSocket('ws://localhost:8088/fafnir')
      connection.onopen = function () {
        connection.send(`{"name": "launch"}`);
      }
      connection.onmessage = function (ev) {
        var data = JSON.parse(ev.data)
        state.history.push({
          text: data.payload
        });
      }
    },
    input(state, payload) {
      var connection = new WebSocket('ws://localhost:8088/fafnir')
      connection.onopen = function () {
        connection.send(`{"name": "input", "payload": "${payload}"}`);
      }
      connection.onmessage = function (ev) {
        var data = JSON.parse(ev.data)
        state.history.push({
          text: data.payload
        });
      }
      // this.inputText = "";
    },
    output(state) {
      var connection = new WebSocket('ws://localhost:8088/fafnir')
      connection.onmessage = function (ev) {
        state.history.push({
          text: ev.payload
        });
      }
      console.log(state.history);
    }
  },
  actions: {},
  getters: {
    history: state => state.history,
  }
})
