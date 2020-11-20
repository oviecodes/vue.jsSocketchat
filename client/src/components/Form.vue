<template>
  <div class="ui container">
    <form class="ui form" @submit="onSubmit">
      <!-- username field -->
      <div class="field">
        <label>Username</label>
        <input type="text" v-model="username" />
      </div>
      <!-- chatroom field -->

      <div class="field">
        <label>Chatroom</label>
        <select v-model="chatroom" class="ui search dropdown">
          <option value="">select chatroom</option>
          <option value="party">Party</option>
          <option value="programming">Programming</option>
        </select>
      </div>

      <button
        :disabled="username == '' || chatroom === ''"
        class="ui button"
        type="submit"
      >
        Join
      </button>

      <h3>{{ username }}</h3>
      <h3>{{ chatroom }}</h3>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Form",
  data() {
    return {
      username: "",
      chatroom: ""
    };
  },
  methods: {
      //mapActions from vuex
    ...mapActions(["getUserDetails"]),
    //on submit
    onSubmit(e) {
      e.preventDefault();
      //onsubmit save Username and selected chatroom to state
      //we pass them as an object
      this.getUserDetails({ username: this.username, chatroom: this.chatroom });
    }
  },
  computed: {}
};
</script>

<style scoped></style>
