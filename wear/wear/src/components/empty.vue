<template>
  <div class="box">
     <header class="header-box">
      <img @click="back" src="../assets/img/dewuImage/left_back.png" alt />
      <span>404</span>
    </header>
    <img class="error" src="../assets/img/dewuImage/empty_sellinglist.png" alt="">
    <p>组长带着小姨子连夜站票跑路</p>
    <p>项目烂尾 . . . </p>
    <button class="btn1" @click="backIndex">回首页</button>
    <button class="btn2" @click="returnTop">上一页</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        back() {
            this.$router.go(-1)
        },
        backIndex(){
            this.$router.push('/')
        },
        returnTop(){
            this.$router.go(-1)
        }
    },
};
</script>

<style lang="scss" scoped>
.box{
    text-align: center;
}

.header-box {
  height: 8vh;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  color: #000;

  img {
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    left: 1.25rem;
  }

  span {
    display: inline-block;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    bottom: 0.8rem;
  }
}
.error{
    width: 70vw;
    display: flex;
    margin: 0 20%;
    margin-top: 30px;
}
p{
    margin: 1.25rem;
    font-size: 20px;
    color: darkgray;
}
button{
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    margin: 20px;
}
.btn1{
    color: #fff;
    font-size: 14px;
    background-color: #0aa1ed;
}
.btn2{
    background-color: transparent;
    border: 1px solid #0aa1ed;
    color: #0aa1ed;
}
</style>