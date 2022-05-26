<template>
  <div class="box">
    <!-- 头部导航栏开始 -->
    <header class="header-box">
      <img @click="back" src="../assets/img/dewuImage/left_back.png" alt />
    </header>
    <!-- 头部导航栏结束 -->
    <span class="welcome">欢迎注册得物App</span>
    <!-- 注册输入框开始 -->
    <van-field type="text" label="手机号：" placeholder="请输入手机号" v-model="phone" @input="phoneblur"></van-field>
    <p v-if="show1">* 手机号格式错误，请重试！</p>
    <van-field
      type="password"
      label="密码:"
      placeholder="请输入密码6-16位数字或字母组合"
      v-model="pwd"
      @input="pwdblur"
    ></van-field>
    <p v-if="show2">* 密码格式错误，请重试！</p>
    <van-field type="password" label="确认密码:" placeholder="请再次输入" v-model="pwd2" @input="pwd2blur"></van-field>
    <p v-if="show3">* 两次输入密码不一致，请重试！</p>

    <button class="btn1" v-if="btnshow" disabled @click="submit">提交注册</button>
    <button class="btn2" v-if="!btnshow" @click="submit">提交注册</button>
    <!-- 注册输入框结束 -->
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  data() {
    return {
      phone: "",
      pwd: "",
      pwd2: "",
      // 号码错误提示，为false不提示
      show1: false,
      // 密码错误提示，为false不提示
      show2: false,
      // 确认密码错误提示，为flase不提示
      show3: false,
      // 默认显示禁用提交
      btnshow: true
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },

    // 手机正则
    phoneblur() {
      let regPhone = /^1[3-9]\d{9}$/;
        if (regPhone.test(this.phone.trim())) {
          this.show1 = false;
        } else {
          // 手机号码错误显示错误信息
          this.show1 = true;
        }
    },

    // 密码正则
    pwdblur() {
      let regPwd = /^\w{6,16}$/;
        if (regPwd.test(this.pwd.trim())) {
          this.show2 = false;
        } else {
          this.show2 = true;
        }
    },

    // 第二次密码正则
    pwd2blur() {
      if (this.pwd != this.pwd2) {
        this.show3 = true;
      } else {
        this.show3 = false;
      }
      // 三个条件同时满足，显示阔以提交
      if (
        this.show1 == false &&
        this.show2 == false &&
        this.show3 == false 
      ) {
        this.btnshow = false;
      } else {
        this.btnshow = true;
      }
    },
    submit() {
      this.axios
        .post("/reg", `phone=${this.phone}&pwd=${this.pwd}`)
        .then(res => {
          if (res.data.code == 1) {
            // 展示信息
            Toast(res.data.msg)
            setTimeout(()=>{
              this.$router.push("/me");
            },1000)
            
          }else{
            Toast(res.data.msg)
          }
        });
      // console.log(111);
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  text-align: center;
}
.header-box {
  height: 8vh;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  color: #000;
  border-bottom: 1px solid rgb(245, 245, 245);

  img {
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    left: 1.25rem;
  }
}
.welcome {
  display: block;
  font-size: 1.125rem;
  color: #000;
  padding: 4rem;
}
span {
  color: #000;
  font-weight: 600;
}
.van-button__text {
  color: #fff;
}
p {
  font-size: 14px;
  color: red;
  margin: 5px;
}
button {
  background-color: #aaaabb;
  border: none;
  margin: 1.875rem;
  color: #fff;
  border-radius: 3px;
  padding: 16px 100px;
}
.btn2 {
  background-color: #000;
  border: none;
  margin: 1.875rem;
  color: #fff;
  border-radius: 3px;
  padding: 16px 100px;
}
</style>