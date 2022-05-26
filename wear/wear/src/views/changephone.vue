<template>
  <div class="box">
    <header class="header-box">
      <img @click="back" src="../assets/img/dewuImage/left_back.png" alt />
    </header>
    <div>
      <van-cell class="title" title="原手机号验证" label="请输入您的原手机号码" />
    </div>
    <div class="input">
      <span>+86</span>
      <img src="../assets/img/dewuImage/down.png" alt />
      <input id="d1" type="text" v-model="yanzheng" @keyup="getInputValue" autocomplete=false />
    </div>
    <button v-if="isOk" class="two">下一步</button>
    <button v-if="!isOk" class="one" disabled>下一步</button>
  </div>
</template> 

<script>
export default {
  data() {
    return {
      yanzheng: "",
      isOk: false
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    getInputValue() {
      this.yanzheng.length >=11 ? (this.isOk = true) : (this.isOk = false);
    }
  }
};
</script>

<style lang="scss" scoped>
.header-box {
  margin-bottom: 1.875rem;
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
}
.title {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 1.875rem;
}
.box > div:nth-child(2) {
  margin-bottom: 1.875rem;
  width: 85vw;
  margin: 0 auto;
}
.input {
  width: 80vw;
  height: 1.5625rem;
  display: block;
  margin: 0 auto;
  margin-bottom: 1.875rem;
  border-bottom: 1px solid rgb(240, 240, 240);
  img {
    width: 0.625rem;
    margin: 0 0.625rem;
  }
  input {
    width: 60vw;
    border: none;
    color: #000;
    caret-color: #0099cc;
  }
}
.one {
  width: 80vw;
  display: block;
  margin: 0 auto;
  padding: 10px;
  color: #fff;
  background-color: #abaabb;
  border: none;
}
.two {
  width: 80vw;
  display: block;
  margin: 0 auto;
  padding: 10px;
  color: #fff;
  background-color: #000;
  border: none;
}
</style>