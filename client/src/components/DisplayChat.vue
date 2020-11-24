



<template>
    <div class='chat-container' ref="chat_container">
        <div class='header'> 
            <h5>{{ capatalize(userDetails.chatroom) }} Room</h5>
            <router-link to='/'>
                <button
                class="ui small button"
                type="submit"
                >
                    Leave room
                </button>
            </router-link>
            
        </div>
        <div v-for="(msg, i) in getMessages" :key="i"  :class="msg.type">
            <p class='username item1' v-show='userDetails.username.trim().toLowerCase() !== msg.user' >{{ msg.user }}</p>
            <p class="message item2">{{ msg.msg }}</p>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'DisplayChat',
    data(){
        return {

        }
    },
    methods: {
        capatalize(str) {
            return `${str.slice(0, 1).toUpperCase()}${str.slice(1)}`
        },
        scrollToEnd() {
            const content = this.$refs.chat_container
            content.scrollTop = content.scrollHeight
        }
    },
    computed: {
        ...mapGetters(['getMessages', 'userDetails'])
    },
    updated() {
        this.scrollToEnd()
    }
}
</script>

<style scoped>
    .adminMessage{
       font-size: 10px;
       margin-bottom: 10px; 
    }

    .myMessage {
        display: grid;
        grid-template-columns: auto auto;
        grid-column-gap: 2px;
        justify-content: end;
        margin-left: 20px;
        margin-right: 5px;
        margin-bottom: 10px;
    }

    .myMessage > .message{
        background: rgb(83, 141, 83);
        border-radius: 10px 0px 10px 10px;
        padding: 8px;
        color: white;
        text-align: left;
    }

    .otherMessages > .message{
        background: rgb(83, 141, 83);
        border-radius: 0px 10px 10px 10px;
        padding: 8px;
        color: white;
        text-align: left;
    }

    .username{
        margin-top: 10px;
        color: gray;
        display: inline;
        font-size: 8px;
    }

    .otherMessages {
        display: grid;
        grid-template-columns: auto auto;
        grid-column-gap: 3px;
        justify-content: start;
        margin-left: 10px;
        margin-right: 20px;
        margin-bottom: 10px;
    }

    .otherMessages > .item1 { 
        grid-area: 1 / 2 ;
     }

    .otherMessages > .item2 { 
        grid-area: 1 / 1; 
    }

    .chat-container{
        position: relative;
        border: 1px solid grey;
        border-radius: 2%;
        height: 70vh;
        overflow: scroll;
    }

    p{
        font-size: 10px;
        font-family: 'Montserrat';
    }

    @media only screen and (min-width: 600px) {
        .chat-container {
            width: 50%;
            left: 25%;
        }
    }

    .header{
        display: grid;
        grid-template-columns: auto auto;
        justify-content: space-between;
        align-items: center;
        background:  rgb(10, 8, 8);
        padding: 10px;
        position: sticky;
        top: 0;
        color: white
    }

    .header > h5 {
        margin-top: 1em; 
    }
</style>