<template>
  <div>
    <div class="loginMsg" v-if="show">
      <img
        class="img1"
        @click="close"
        src="../assets/img/dewuImage/close.png"
        alt=""
      />
      <span>登录后可以探索更多潮流内容</span>
      <img class="img2" src="../assets/img/dewuImage/zhangyu.png" alt="" />
      <button @click="toMe">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    };
  },
  methods: {
    close() {
      this.show = false;
      localStorage.setItem("number", "1");
    },
    toMe() {
      this.$router.push("/me");
    }
  },
  mounted() {
    //   判断用户是否手动关闭登录提示框，如果手动关闭再次刷新之后不再弹出登录提示
    let number = localStorage.getItem("number");
    // console.log(number)
    if (number == null) {
      console.log(111);

      this.show = true;
    } else {
      console.log(222);
      this.show = false;
    }
    
    //页面加载时，判断用户是否登录,假设没有登录,显示登录提示页面
    let uname =
      sessionStorage.getItem("uname") || localStorage.getItem("uname");
    if (uname == null) {
      this.show = true;
    } else {
      this.show = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.loginMsg {
  z-index: 999;
  box-sizing: content-box;
  position: relative;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  width: 100vw;
  position: fixed;
  top: 84vh;
  height: 3rem;
  display: flex;
  align-items: center;
  .img1 {
    width: 0.6rem;
    margin: 0 1.25rem;
  }
  .img2 {
    width: 5rem;
    position: absolute;
    bottom: 0;
    right: 2.5rem;
  }
  button {
    border: none;
    background-color: #30afb8;
    padding: 5px 10px;
    font-size: 13px;
    position: absolute;
    right: 0.5rem;
    border-radius: 1px;
  }
}
</style>