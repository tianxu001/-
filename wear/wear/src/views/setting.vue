<template>
  <div>
    <header class="header-box">
      <img @click="back" src="../assets/img/dewuImage/left_back.png" alt />
      <span>设置</span>
    </header>
    <div class="top">
      <van-cell class="top-title" title="账号安全" is-link to="zhaq"/>
      <van-cell class="top-title" title="支付设置" is-link />
      <van-cell class="top-title" title="身份认证" is-link />
      <van-cell class="top-title" title="地址管理" is-link />
      <van-cell title="我的尺码" is-link />
    </div>
    <div class="middle">
      <van-cell class="top-title" title="隐私设置" is-link />
      <van-cell class="top-title" title="消息设置" is-link />
      <van-cell title="通用设置" is-link />
    </div>
    <div class="bottom">
      <van-cell class="top-title" title="反馈与建议" is-link />
      <van-cell title="关于得物" is-link />
      <button @click="logout">退出登录</button>
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
        logout(){
          this.$store.state.loginUser={};
          sessionStorage.clear();
          localStorage.clear();
          history.go(-2)
        }
    },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  color: #000;
}
$title-size: 1.25rem;
$title-weight: 550;
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
.top {
  font-size: $title-size;
  font-weight: $title-weight;
  border-bottom: 8px solid rgb(245, 245, 245);
  .top-title {
    border-bottom: 1px solid rgb(245, 245, 245);
  }
}
.middle {
  font-size: $title-size;
  font-weight: $title-weight;
  border-bottom: 8px solid rgb(245, 245, 245);
  .top-title {
    border-bottom: 1px solid rgb(245, 245, 245);
  }
}
.bottom {
  font-size: $title-size;
  font-weight: $title-weight;
  .top-title {
    border-bottom: 1px solid rgb(245, 245, 245);
  }
  button {
      display: block;
    font-size: 16px;
    padding: 0.625rem;
    background-color: transparent;
    border: 1.5px solid rgb(245, 245, 245);
    width: 90vw;
    margin: 1.25rem auto;
  }
}
</style>