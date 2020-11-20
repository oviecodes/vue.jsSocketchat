<template>
  <div class="about">
    <h1>This is the chat page</h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import { io } from "socket.io-client";

let socket;

export default {
  name: "Chat",
  computed: {
    ...mapGetters(["userDetails"])
  },
  mounted() {
    socket = io(`http://localhost:5000`);
    const { username, chatroom } = this.userDetails;

    socket.emit("new user", { username, chatroom }, () => {

    });

    console.log(username, chatroom);
    console.log(socket)
  },

  destroyed() {
    socket.disconnect(true)
    console.log(socket)
  }
};
</script>

<style scoped></style>
