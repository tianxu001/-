<template>
  <div>
    <header class="header-box">
      <img @click="back" src="../assets/img/dewuImage/left_back.png" alt />
      <span>评论和@</span>
    </header>
    <div class="content">
        <img src="../assets/img/dewuImage/ic_answer_empty.png" alt="">
        <p>暂无评论和@</p>
    </div>
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
    },
};
</script>

<style lang="scss" scoped>
.header-box {
  height: 8vh;
  position: relative;
  color: #000;
  img {
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    left: 1.25rem;
    bottom: 0.625rem;
  }
  span {
    position: absolute;
    display: inline-block;
    left: 43%;
    font-size: 18px;
    font-weight: 500;
    bottom: 0.8rem;
  }
}
.content{
    position: relative;
    display: flex;
    img{
        width: 12.5rem;
        position:absolute;
        top: 6.25rem;
        left:23%;
    }
    p{
        color: #bfbfbf;
        position:absolute;
        top: 19.5rem;
        left: 38%;
    }

}
</style>