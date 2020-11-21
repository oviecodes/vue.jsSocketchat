



<template>
    <div >
        <div v-for="(msg, i) in getMessages" :key="i">
          {{ msg }}  
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

</style>