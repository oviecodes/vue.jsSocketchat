



<template>
    <div >
        <div v-for="(msg, i) in getMessages" :key="i" :class='msg.type'>
          <p>{{ msg.msg }}</p>
          <p>{{ msg.user }}</p>
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
        position: center;
        background: pink;
    }

    .myMessage {
        background: green;
    }

    .otherMessages {
        background: blue;
    }
</style>