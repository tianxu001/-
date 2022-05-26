<template>
  <div class="my-login">

    
    <!-- 没有登录时，弹出登录窗口开始 -->
    <van-popup v-model="isLogin" position="bottom" :style="{height:'100%'}" class="loginOut">
      <i class="closeIcon" @click="closeLoginPage">x</i>
      <ul>
        <li>登录后继续操作</li>
        <li>158****2902</li>
        <li>
          <button>本机号码一键登录</button>
        </li>
        <li @click="otherTelLogin">
          <button>其他手机号码登录</button>
        </li>
        <li>
          登录表示您已阅读并同意
          <router-link to>用户协议、隐私政策 和中国移动认证服务协议</router-link>
        </li>
        <li v-if="isShowOtherIcon" class="other-login">
          <ul>
            <li>
              <img src="../assets/img/index/me/wechat.png" alt />
            </li>
            <li>
              <img src="../assets/img/index/me/weibo.png" alt />
            </li>
            <li>
              <img src="../assets/img/index/me/qq.png" alt />
            </li>
            <li>
              <img src="../assets/img/index/me/hupu2.png" alt />
            </li>
          </ul>
        </li>
        <li @click="showOtherLogin" v-else class="other-text">其他登录方式</li>
        <li>中国移动提供认证服务</li>
      </ul>
    </van-popup>
    <!-- 没有登录时，弹出登录窗口结束 -->



    <!-- 选择其他号码登录的界面开始 -->
    <van-popup
      v-model="otherTelLoginPage"
      position="right"
      :style="{width:'100%',height:'99.9%'}"
      class="loginIn"
    >
      <van-nav-bar left-arrow @click-left="back"></van-nav-bar>
      <ul>
        <li>登录后继续操作</li>
        <li>
          <span @click="showAreaCodePage">
            {{cityAreaCode}}
            <img src="../assets/img/index/me/arrow_bottom_icon.png" />
          </span>
          <van-field type="tel" clearable placeholder="输入手机号" v-model="tel" @input="input"></van-field>
        </li>
        <li>
          <span>验证码</span>
          <van-field type="text" clearable placeholder="输入验证码" v-model="Code"></van-field>
          <button disabled @click="getCode" id="codeButton">获取验证码</button>
        </li>
        <li>
          <van-button disabled type="primary">登录</van-button>
        </li>
        <li>
          <ul>
            <li @click="showPwdLogin">用密码登录</li>
            <li @click="toReg">没有账号?马上注册</li>
          </ul>
        </li>
        <li v-if="isShowOtherIcon" class="other-login-in">
          <ul>
            <li>
              <img src="../assets/img/index/me/wechat.png" alt />
            </li>
            <li>
              <img src="../assets/img/index/me/weibo.png" alt />
            </li>
            <li>
              <img src="../assets/img/index/me/qq.png" alt />
            </li>
            <li>
              <img src="../assets/img/index/me/hupu2.png" alt />
            </li>
          </ul>
        </li>
        <li @click="showOtherLogin" v-else class="other-text-in">其他登录方式</li>
        <li>
          登录即同意
          <router-link to>用户协议</router-link>和
          <router-link to>隐私政策</router-link>首次登录将自动注册
        </li>
      </ul>
    </van-popup>
    <!-- 选择其他号码登录的界面结束 -->
    <!-- 选择国家或地区手机区号界面开始 -->
    <van-popup
      v-model="isShowAreaCodePage"
      position="bottom"
      :style="{height:'100%'}"
      class="phoneNum"
    >
      <van-nav-bar title="选择国家和地区" left-text="取消" @click-left="closeAreaCodePage"></van-nav-bar>
      <ul class="city-code">
        <li
          @click="chooseAreaCode"
          v-for="(value,index) of areaCode"
          :key="index"
          :data-code="value.code"
        >
          <span>{{value.city}}</span>
          <span>{{value.code}}</span>
        </li>
      </ul>
    </van-popup>
    <!-- 选择国家或地区手机区号界面结束 -->

    
    <!-- 选择密码登录界面开始 -->
    <van-popup
      v-model="isShowPwdLoginPage"
      position="top"
      :style="{height:'100%'}"
      class="loginIn pwdLogin"
    >
      <van-nav-bar left-arrow @click-left="back"></van-nav-bar>
      <ul class="first">
        <li>登录后继续操作</li>
        <li>
          <span @click="showAreaCodePage">
            {{cityAreaCode}}
            <img src="../assets/img/index/me/arrow_bottom_icon.png" />
          </span>
          <van-field type="tel" clearable placeholder="输入手机号" v-model="tel" @input="upwdLoginInput"></van-field>
        </li>
        <li>
          <span>密码</span>
          <van-field
            type="password"
            clearable
            placeholder="6-16位数字或字母组合"
            v-model="upwd"
            id="upwdEle"
            @input="upwdLoginInput"
          ></van-field>
          <div @click="openOrCloseEye">
            <img src="../assets/img/index/me/eye_close.png" v-if="!isOpenEye" />
            <img src="../assets/img/index/me/eye_open.png" v-else />
          </div>
        </li>
        <li>
          <van-button :disabled="disabled" type="primary" @click="myLogin">登录</van-button>
        </li>
        <li>
          <ul>
            <li @click="showCodeLogin">去注册</li>
            <li>忘记密码</li>
          </ul>
        </li>
        <li v-if="isShowOtherIcon" class="other-login-in">
          <ul>
            <li>
              <img src="../assets/img/index/me/wechat.png" alt />
            </li>
            <li>
              <img src="../assets/img/index/me/weibo.png" alt />
            </li>
            <li>
              <img src="../assets/img/index/me/qq.png" alt />
            </li>
            <li>
              <img src="../assets/img/index/me/hupu2.png" alt />
            </li>
          </ul>
        </li>
        <li @click="showOtherLogin" v-else class="other-text-in">其他登录方式</li>
        <li>
          登录即同意
          <router-link to>用户协议</router-link>和
          <router-link to>隐私政策</router-link>首次登录将自动注册
        </li>
      </ul>
    </van-popup>
    <!-- 选择密码登录界面结束 -->
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
    // 判断是否登录的变量
    props:['isLogining'],
  data() {
    return {
      // 判断用户是否登录的参数,false表示登录了，true表示没登陆
      // isLogin: this.isLogining,
      isLogin: false,
      // 判断是否显示其他登录方式图标的参数
      isShowOtherIcon: false,
       // 判断其他号码登录界面是否显示参数
      otherTelLoginPage: false,
      // 判断是否显示选择区号界面的参数
      isShowAreaCodePage: false,
      // 输入的手机号
      tel: "",
      // 输入的验证码
      Code: "",
      // 存储被选择的区号
      cityAreaCode: "+86",
      // 存储用户密码
      upwd: "",
      isShowPwdLoginPage: this.isLogining,
      // 判断是否点亮显示密码图标
      isOpenEye: false,
      // 判断是否禁用密码登录的按钮
      disabled: true,
    };
  },
  methods:{

      // 拿到vuex中的登录方法，用this.方法名调用
      ...mapActions(['login']),



      // 点击‘其他登录方式’字样，显示其他登录方式图标
    showOtherLogin() {
      this.isShowOtherIcon = true;
    },
    // 点击‘其他手机号码登录’字样，显示界面
    otherTelLogin() {
      this.otherTelLoginPage = true;
      // 因为跟登录界面样式一样，要引用同样的变量来控制是否显示其他登录方式的图标，所以在点击其他号码登录的时候，变量为false，就不会影响到其他页面
      this.isShowOtherIcon = false;
    },
    // 点击返回箭头，触发组件自带的click-left方法
    back() {
      // this.otherTelLoginPage = false;
      // this.isShowOtherIcon = false;
      // this.isShowPwdLoginPage = false;
      this.$router.replace('/')
    },
    toReg(){
      this.$router.push('/reg')
    },
    // 点击+86显示选择国家或者地区的区号界面
    showAreaCodePage(e) {
      this.isShowAreaCodePage = true;
      // 异步获取到第一个元素，给第一个元素加上样式choosed样式
      // 判定一下，点击该区域时候，区号是否是+86,是的话再执行以下代码
      let spanCode = e.target.innerText;
      if (spanCode == "+86") {
        // 由于触发事件的元素与想要获取的元素不是在同一个页面，所以要用异步的方法获取元素
        setTimeout(() => {
          let defaultEle = document.querySelector(".city-code>li:first-child");
          defaultEle.className = "choosed";
        }, 0);
      }
    },
    // 点击左上角的取消按钮，关闭选择国家或者地区的区号界面
    closeAreaCodePage() {
      this.isShowAreaCodePage = false;
    },
    // 点击相应区号，利用事件委托，加上样式
    chooseAreaCode(e) {
      // 利用自定义属性获取区号,并把值赋值给areaCode
      let code = e.target.dataset.code;
      this.cityAreaCode = code;
      let lis = document.querySelectorAll(".city-code>li");
      lis.forEach((li) => {
        li.className = "";
      });
      e.target.className = "choosed";
      // 选择好区号之后关闭'选择国家或区域'的页面
      this.isShowAreaCodePage = false;
    },
    // '获取验证码'按钮事件
    getCode() {
      console.log("111");
    },
    // 通过input事件实现，输入框不是空的情况下,启用'获取验证码'
    input() {
      // 去除输入框前后空格不为空，执行操作
      // 获取button元素
      let codeButton = document.getElementById("codeButton");
      if (this.tel.trim() !== "") {
        codeButton.style.color = "black";
        codeButton.disabled = false;
      } else {
        codeButton.style.color = "rgb(129, 129, 129)";
        codeButton.disabled = true;
      }
    },
    // 点击显示密码登录界面
    showPwdLogin() {
      this.isShowPwdLoginPage = true;
      this.isShowOtherIcon = false;
    },
    // 点击验证码登录关闭该页面
    showCodeLogin() {
      // this.isShowPwdLoginPage = false;
      // this.isShowOtherIcon = false;
      this.$router.push('/reg')
    },
    // 点击眼睛图标，图标点亮，密码显示
    openOrCloseEye() {
      let upwdEle = document.getElementById("upwdEle");
      if (this.isOpenEye == false) {
        this.isOpenEye = true;
        upwdEle.type = "text";
      } else {
        this.isOpenEye = false;
        upwdEle.type = "password";
      }
    },



    // 密码登录，点击登录按钮，把数据传到后台查找用户信息
    myLogin() {
      // let user = {
      //   tel: this.tel,
      //   upwd: this.upwd,
      // };


      // this.login(user)
      // // console.log(Object.keys(this.loginUser).length)

      let user={
        tel:this.tel,
        upwd:this.upwd
      }

      // 调用actions里面的login方法,将号码和密码发送给后端
      this.login(user)
    },
    // 密码框的输入事件
    upwdLoginInput() {
      let regTel = /^1[3-9]\d{9}$/;
      let regUpwd = /^\w{6,16}$/;
      let bool = regTel.test(this.tel) && regUpwd.test(this.upwd);
      if (bool) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },
    // 未登陆状态界面,若是没有填写登陆信息直接点叉叉返回上一个界面
    closeLoginPage(){
      history.go(-1)
    }
  },
    computed:{
        ...mapState(['areaCode'])
    }
};
</script>

<style lang="scss">
.my-login {
  // 用户未登录，弹出登录窗口
  .loginOut {
    .closeIcon {
      font-size: 1.625rem;
      position: relative;
      top: 0.625rem;
      left: 1.25rem;
    }
    & > ul {
      position: absolute;
      top: 20%;
      text-align: center;
      color: black;
      button {
        width: 80%;
        height: 2.1875rem;
        font-size: 0.875rem;
        font-weight: 600;
        margin-bottom: 0.625rem;
        border: 0;
      }
      & > li:first-child {
        font-size: 18px;
        margin-bottom: 6.25rem;
      }
      li:nth-child(2) {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 1.875rem;
      }
      li:nth-child(3) {
        button {
          background-color: black;
          color: white;
        }
      }
      li:nth-child(4) {
        button {
          background-color: #fff;
          border: 1px solid rgb(172, 171, 171);
        }
      }
      li:nth-child(5) {
        position: relative;
        left: 15%;
        font-size: 0.75rem;
        color: rgb(148, 148, 148);
        width: 70%;
        line-height: 1.25rem;
        a {
          color: black;
        }
      }
      .other-login {
        margin-left: 6.25rem;
        margin-top: 9.375rem;
        height: 30px;
        & > ul {
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-around;
          width: 70%;
          margin-bottom: 0rem;
          img {
            width: 1.5rem;
          }
        }
      }
      .other-text {
        color: #000;
        font-size: 0.75rem;
        margin-top: 9.375rem;
      }
      li:nth-child(7) {
        font-size: 0.75rem;
        color: rgb(134, 134, 134);
        margin-top: 1.25rem;
      }
    }
    .van-popup__close-icon {
      color: black;
    }
  }
  // 选择其他号码登录窗口
  .loginIn {
    .van-nav-bar .van-icon {
      color: #000;
      font-size: 1.375rem;
    }
    .van-nav-bar {
      margin-bottom: 1.875rem;
    }
    & > ul {
      text-align: center;
      li:first-child {
        color: black;
        margin-bottom: 3.125rem;
      }
      li:nth-child(2),
      li:nth-child(3) {
        margin-bottom: 1.875rem;
        position: relative;
        span {
          color: black;
          font-size: 0.75rem;
          position: absolute;
          left: 2.625rem;
          top: 1rem;
          z-index: 2500;
          img {
            position: absolute;
            top: -0.125rem;
            right: -1rem;
          }
        }
        // 获取验证码按钮
        button {
          // text-align: center;
          color: rgb(129, 129, 129);
          font-size: 0.75rem;
          position: absolute;
          z-index: 2500;
          right: 2.5rem;
          top: 1rem;
          padding: 0 0;
          background-color: #fff;
          outline: none;
          border: 0;
        }
        .van-cell {
          width: 80%;
          border-bottom: 0.0625rem solid rgb(196, 195, 195);
          margin-left: 10%;
          padding: 0.625rem 1rem 0rem 3.75rem;
          .van-field__body {
            font-size: 0.75rem;
            font-weight: 200;
          }
          .van-field__label {
            margin-right: 0rem;
            width: 3.2rem;
          }
        }
      }
      li:nth-child(3) {
        .van-field__control {
          width: 60%;
        }
      }
      li:nth-child(4) {
        .van-button {
          width: 80vw;
          height: 2.375rem;
          border-radius: 0rem;
          background-color: black;
          border: none;
        }
      }
      li:nth-child(5) {
        & > ul {
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-around;
          font-size: 0.75rem;
          li:first-child {
            margin: 1.25rem 0 3.125rem;
          }
          li:last-child {
            margin: 1.25rem 0 3.125rem;
            color: rgb(126, 126, 126);
          }
        }
      }
      .other-text-in {
        margin-top: 9.375rem;
        color: #000;
        font-size: 0.75rem;
      }
      .other-login-in {
        margin-left: 6.25rem;
        margin-top: 9.375rem;
        height: 1.875rem;
        & > ul {
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-around;
          width: 70%;
          margin-bottom: 0rem;
          img {
            width: 1.5rem;
          }
        }
      }
      li:nth-child(7) {
        font-size: 0.75rem;
        margin-top: 1.875rem;
        color: rgb(126, 126, 126);
        a {
          color: black;
          text-decoration: underline;
        }
      }
    }
  }
  // 选择国家或者地区的区号界面
  .phoneNum {
    // 被选中的时候的样式
    .choosed {
      font-weight: 600;
      span:first-child:after {
        content: "(当前选择)";
      }
    }
    .van-nav-bar {
      box-shadow: 0 0.9rem 0 0 rgb(230, 230, 230);
      margin-bottom: 0.9rem;
      .van-nav-bar__left {
        span {
          color: rgb(160, 160, 160);
        }
      }
      .van-nav-bar__title {
        color: black;
        font-size: 1.1rem;
      }
    }

    & > ul {
      li {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        height: 5vh;
        border-bottom: 0.0625rem solid rgb(204, 204, 204);
        margin-left: 0.8rem;
        padding: 0.25rem 0.6rem 0.25rem 0;
        line-height: 5vh;
        font-size: 0.875rem;
        color: black;
      }
    }
  }
  // 密码登录界面
  .pwdLogin {
    .first {
      & > li:nth-child(3) {
        img {
          position: absolute;
          right: 2.375rem;
          top: 0.875rem;
        }
        .van-field__control {
          width: 80%;
        }
      }
    }
  }
}
</style>