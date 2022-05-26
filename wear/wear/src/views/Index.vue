<template>
    <div>
        123
        <my-tabbar :select="select"></my-tabbar>
         <my-login :isLogining="isLogining"></my-login>
    </div>
</template>
<script>
export default {
    data(){
        return{
            select:'dw',
            isLogining:false
        }
    }
}
</script>