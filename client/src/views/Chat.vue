<template>
  <div class="ui raised container">
    
    <DisplayChat />

    <ChatInput />
    
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { io } from "socket.io-client";
import ChatInput from '../components/ChatInput'
import DisplayChat from '../components/DisplayChat'


let socket;

export default {
  name: "Chat",
  components: {
    ChatInput,
    DisplayChat
  },
  data() {
    return {
      message: '',
    }
  },
  computed: {
    ...mapGetters(["userDetails"])
  },
  methods: {
    ...mapActions(['setSocketState', 'setMessages'])
  },
  mounted() {
    socket = io(`http://localhost:5000`);
    this.setSocketState(socket)
    const { username, chatroom } = this.userDetails;

    socket.emit("newUser", { username, chatroom }, () => {

    });



    socket.on('adminMsg', ({ user, msg }) => {
      this.setMessages(msg)
      console.log(user, msg)
      this.adminMessage = msg
    })

    socket.on('clientMessage', ({ user, msg }) => {
      this.setMessages(msg)
      console.log(user)
    })

    console.log(username, chatroom);
    console.log(socket)
  },

  destroyed() {
    // socket.disconnect(true)
    console.log(socket)
  }
};
</script>

<style scoped></style>
