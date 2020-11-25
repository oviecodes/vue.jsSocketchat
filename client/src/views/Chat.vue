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
    ...mapActions(['setSocketState', 'setMessages', 'resetStateMessages', 'getUserDetails'])
  },
  mounted() {
    socket = io();
    this.setSocketState(socket)
    
     
    !this.userDetails.username && !this.userDetails.chatroom ? 
    this.getUserDetails({ username:  this.$route.query.username, chatroom: this.$route.query.chatroom }) : 
    null; 

    const { username, chatroom} = this.userDetails
    
    socket.emit("newUser", { username, chatroom }, ( error ) => {
      if(error) {
        alert(error)
      }   
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
      let { username, chatroom } = this.userDetails;
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
  },

  destroyed() {
    this.resetStateMessages()
    socket.disconnect(true)
  }
};
</script>

<style scoped></style>
