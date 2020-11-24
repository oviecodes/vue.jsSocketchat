

<template>
    <div class='fixed'>
        <form class="ui form" @submit="sendMsg">
            <!-- username field -->
            <div class="field fix">
            <input type="text" v-model="message" class='chatInput'/>
            <button
                :disabled="message == ''"
                class="ui green button sendBtn"
                type="submit"
                >
                send
            </button>
            </div>
        </form>
    </div>
    
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'Chatbox',
    data() {
       return {
           message: ''
       }
    },
    methods: {
        sendMsg(e) {
            e.preventDefault()
            this.socket.emit(`clientMsg`, this.message, (error) => {
                if(error) {
                    alert(error)  
                }
               
            })
            this.message = ''
        },
        ...mapActions(['setMessages'])
    },
    computed: {
        ...mapGetters(['socket'])
    }
}
</script>

<style scoped>
    .fixed{
        position: relative;
        
    }

    .fix{
        display: grid;
        grid-template-columns: 80% 20%;
    }

    /* .sendBtn{
        display: inline;
    }

    .chatInput{
        display: inline;
    } */

     @media only screen and (min-width: 600px) {
        .fixed{
            width: 50%;
            left: 25%;
        }
    }
</style>