<template>
  <div>
    <header class="header-box">
      <img @click="back" src="../assets/img/dewuImage/left_back.png" alt />
      <span>账号安全</span>
    </header>
    <div class="top">
      <van-cell title="绑定手机" value="更换号码" label="131****5475" is-link to="changephone" />
      <van-cell title="设置登录密码" is-link />
    </div>
    <p>第三方账号绑定</p>
    <div class="content">
      <div class="wx">
        <img src="../assets/img/dewuImage/wechat_share.png" alt />
        <span>微信</span>
        <button @click="openwx">绑定</button>
      </div>
      <div class="qq">
        <img src="../assets/img/dewuImage/qq_share.png" alt />
        <span>Q Q</span>
        <button @click="openqq">绑定</button>
      </div>
      <div class="sina">
        <img src="../assets/img/dewuImage/sina.png" alt />
        <span>微博</span>
        <button @click="opensina">绑定</button>
      </div>
      <div class="apple">
        <img src="../assets/img/dewuImage/apple.png" alt />
        <span>Apple ID</span>
        <button @click="openapple">绑定</button>
      </div>
    </div>
    <div class="logout">
      <van-cell @click="logout" class="title" title="账户注销" is-link />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    back() {
      this.$router.go(-1);
    },
    logout(){
      this.$router.push('/logout')
    },
    openwx(title) {
      this.$dialog
        .confirm({
          title: "“得物(毒)”想要打开微信",
          confirmButtonColor: "#0055ff",
          cancelButtonColor: "#0055ff"

          // message: "弹窗内容"
        })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
        });
    },
    openqq() {
      this.$dialog
        .confirm({
          title: "“得物(毒)”想要打开 Q Q",
          confirmButtonColor: "#0055ff",
          cancelButtonColor: "#0055ff"
          // message: "弹窗内容"
        })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
        });
    },
    opensina() {
      this.$dialog
        .confirm({
          title: "“得物(毒)”想要打开微博",
          confirmButtonColor: "#0055ff",
          cancelButtonColor: "#0055ff"
          // message: "弹窗内容"
        })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
        });
    },
    openapple() {
      this.$dialog
        .confirm({
          title: "“得物(毒)”想要绑定Apple ID",
          confirmButtonColor: "#0055ff",
          cancelButtonColor: "#0055ff"
          // message: "弹窗内容"
        })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
        });
    }
  }
};
</script>

<style lang="scss" scoped>
$title-size: 16px;
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
  border-bottom: 1rem solid rgb(245, 245, 245);
}
p {
  height: 1rem;
  background-color: rgb(245, 245, 245);
  font-size: 10px;
  padding: 0.3125rem 1rem;
  color: #c3c3c3;
  font-weight: 500;
}
.content {
  font-size: 15px;
  line-height: 1;
  .wx {
    height: 2.8125rem;
    line-height: 2.8125rem;
    position: relative;
    border-bottom: 1px solid rgb(240, 240, 240);
    img {
      width: 2.5rem;
      position: absolute;
      left: 1rem;
    }
    span {
      position: absolute;
      left: 4rem;
      top: -0.1rem;
    }
    button {
      font-size: 14px;
      position: absolute;
      right: 1.25rem;
      height: 1.5rem;
      width: 3.125rem;
      top: 0.6rem;
      line-height: 1.2rem;
      background-color: transparent;
      outline: none;
      border: none;
      color: #fff;
      background-color: #55cccc;
    }
    .confirm-button-color {
      color: #000;
    }
  }
  .qq {
    height: 2.8125rem;
    line-height: 2.8125rem;
    position: relative;
    border-bottom: 1px solid rgb(240, 240, 240);
    img {
      width: 2.5rem;
      position: absolute;
      left: 1rem;
    }
    span {
      position: absolute;
      left: 4rem;
      top: -0.1rem;
    }
    button {
      font-size: 14px;
      position: absolute;
      right: 1.25rem;
      height: 1.5rem;
      width: 3.125rem;
      top: 0.6rem;
      line-height: 1.2rem;
      background-color: transparent;
      outline: none;
      border: none;
      color: #fff;
      background-color: #55cccc;
    }
  }
  .sina {
    box-sizing: border-box;
    height: 2.8125rem;
    line-height: 2.8125rem;
    position: relative;
    border-bottom: 1px solid rgb(240, 240, 240);
    img {
      width: 2rem;
      position: absolute;
      left: 1.3rem;
      top: 0.3rem;
    }
    span {
      position: absolute;
      left: 4rem;
      top: -0.1rem;
    }
    button {
      font-size: 14px;
      position: absolute;
      right: 1.25rem;
      height: 1.5rem;
      width: 3.125rem;
      top: 0.6rem;
      line-height: 1.2rem;
      background-color: transparent;
      outline: none;
      border: none;
      color: #fff;
      background-color: #55cccc;
    }
  }
  .apple {
    height: 2.8125rem;
    line-height: 2.8125rem;
    position: relative;
    border-bottom: 8px solid rgb(245, 245, 245);
    padding-bottom: 1px;
    img {
      width: 2.5rem;
      position: absolute;
      left: 1rem;
      margin-bottom: 2px;
    }
    span {
      position: absolute;
      left: 4rem;
      top: -0.1rem;
    }
    button {
      font-size: 14px;
      position: absolute;
      right: 1.25rem;
      height: 1.5rem;
      width: 3.125rem;
      top: 0.6rem;
      line-height: 1.2rem;
      background-color: transparent;
      outline: none;
      border: none;
      color: #fff;
      background-color: #55cccc;
    }
  }
}
.logout{
    font-size: $title-size;
  font-weight: $title-weight;
}
</style>