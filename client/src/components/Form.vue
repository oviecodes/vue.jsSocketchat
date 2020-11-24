<template>
  <div class="user_form">
    <div>
      <h1>Welcome to the chat app</h1>
    </div>
    <form class="ui form" @submit="onSubmit">
      <!-- username field -->
      <div class="field">
        <label>Username</label>
        <input type="text" placeholder="Enter your username" v-model="username" />
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

<script>;
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
     
      this.$router.push({path: `/chat?username=${this.username}&chatroom=${this.chatroom}`})
    }
  },
  computed: {}
};
</script>


<style scoped>
  h1{
    margin-bottom: 1em;
    color: rgb(83, 141, 83);
  }

  .user_form{
    display: grid;
    align-content: center;
    align-self: center;
    /* align-items: center; */
    position: relative;
    padding: 30px;
    height: 80vh;
  }

  @media only screen and (min-width: 600px) {
    .user_form {
      width: 50%;
      left: 25%;
      padding: 0px;
    }
  }
</style>
