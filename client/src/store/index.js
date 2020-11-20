import Vue from "vue";
import Vuex from "vuex";
import Chats from "./modules/chats.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Chats
  }
});
