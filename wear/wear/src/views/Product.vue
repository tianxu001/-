<template>
    <div>
       <!-- <p>{{$store.state.products[id].productName}}</p>
        <p>¥{{$store.state.products[id].salePrice}}</p> -->
    </div>
</template>
<script>
export default {
    data(){
        return{
          id:0  
        }
    },
    mounted(){
        // this.id=this.$route.query.index;
        // 通过方法的方式调用getters获取对象
        // console.log(this.$store.getters.getByIndex(this.id));
    }
}
</script>