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
      userThingy: { }
    }
  },
  computed: {
    ...mapGetters(["userDetails"])
  },
  methods: {
    ...mapActions(['setSocketState', 'setMessages', 'resetStateMessages'])
  },
  mounted() {
    socket = io(`http://localhost:5000`);
    this.setSocketState(socket)
    
    this.userThingy = 
    !this.userDetails.username && !this.userDetails.chatroom ? 
    { username:  this.$route.query.username, chatroom: this.$route.query.chatroom } : 
    this.userDetails; 

    const { username, chatroom} = this.userThingy
    
    socket.emit("newUser", { username, chatroom }, () => {

    });

    socket.on('adminMsg', ({ user, msg }) => {
      const message = {
        user,
        msg,
        type: "adminMessage"
      }
      this.setMessages(message)
    })

    socket.on('clientMessage', ({ user, msg }) => {
      let { username, chatroom } = this.userThingy;
      username = username.trim().toLowerCase()
      const message = (username === user) ? {
        user,
        msg,
        type: "myMessage",
        chatroom
      } : {
        user,
        msg,
        type: "otherMessages",
        chatroom
      }

      this.setMessages(message)
    })

    console.log(username, chatroom);
    console.log(socket)
  },

  destroyed() {
    this.resetStateMessages()
    socket.disconnect(true)
    console.log(socket)
  }
};
</script>

<style scoped></style>
