<template>
    <div>
        <h1>修改年龄：</h1>
        <p>{{$store.state.age}}</p>
        <button @click="add">年龄增长</button>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        add(){
            this.$store.commit('addAge')
        }
    }
    
}
</script>