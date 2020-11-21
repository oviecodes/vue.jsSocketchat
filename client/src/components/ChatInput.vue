

<template>
    <div class>
        <form class="ui form" @submit="sendMsg">
            <!-- username field -->
            <div class="field">
            <input type="text" v-model="message" />
            <button
                :disabled="message == ''"
                class="ui green button"
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
            this.socket.emit(`clientMsg`, this.message)
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

</style>