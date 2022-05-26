<template>
  <div>
    这个是服务页面
    <my-tabbar :select="select"></my-tabbar>
  </div>
</template>

<script>
export default {
    data(){
        return{
            select:"service"
        }
    }
}
</script>
