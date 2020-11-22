



<template>
    <div class='container'>
        <div v-for="(msg, i) in getMessages" :key="i" class='message'>

          <p :class="msg.type"> 
              {{ msg.user }}
              <br>
              {{ msg.msg }}
            </p>
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
        
    },
    computed: {
        ...mapGetters(['getMessages'])
    }
}
</script>

<style scoped>
    .adminMessage{
        margin-left: 10%;
        background: rgb(221, 191, 196);
        text-align: center;
    }

    .myMessage {
        background: rgb(168, 216, 168);
        margin-left: 20%;
        text-align: left;
    }

    .otherMessages {
        background: rgb(158, 158, 214);
        margin-left: 5%;
        text-align: left;
    }

    .message {
        padding: 2px 5px;
        position: relative;
        border-radius: 3%;
        
    
    }

    .container{
        position: absolute;
        width: 50%;
        left: 25%;
        border: 1px solid grey;
        border-radius: 2%;
        height: 70vh;
        overflow: scroll;
    }

    p{
        font-size: 12px;
        font-family: 'Montserrat';
    }
</style>