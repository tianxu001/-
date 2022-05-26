<template>
  <div>
    <header class="header-box">
      <img @click="back" src="../assets/img/dewuImage/left_back.png" alt />
      <span>个人卖家入驻</span>
    </header>
    <img style="width:100vw" src="../assets/img/dewuImage/banner.png" alt />
    <div class="youshi">
      <img style="height:40px; vertical-align:-90%;" src="../assets/img/dewuImage/xian.png" alt />
      <span style>个人卖家入驻优势</span>
      <img style="height:40px ; vertical-align:-90%;" src="../assets/img/dewuImage/xian.png" alt />
    </div>
    <div class="box">
      <img src="../assets/img/dewuImage/zhuanye.png" alt="">
      <span class="span1">多种模式</span>
      <span class="span2">预售、现货、求购多种交易模式;</span>
    </div>
    <div class="box">
      <img src="../assets/img/dewuImage/cangchu.png" alt="">
      <span class="span1">快速回款</span>
      <span class="span2">鉴别通过立即结算,当天回款无账期;</span>
    </div>
    <div class="box">
      <img src="../assets/img/dewuImage/kuaisu.png" alt="">
      <span class="span1">安全仓储</span>
      <span class="span2">仓储周转全程监控,交易安全有保障;</span>
    </div>
    <div class="box">
      <img src="../assets/img/dewuImage/moshi.png" alt="">
      <span class="span1">专业客服</span>
      <span class="span2">专线卖家客服团队,交易问题快速响应;</span>
    </div>
    <p>我是企业商家 , 如何入驻 ></p>
    <button>立即申请</button>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.header-box {
  height: 5vh;
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
.youshi{
  text-align: center;
  color: #000;
}
.box{
  position: relative;
  padding-left: 20px;
  margin: 0.625rem;
  img{
    width: 3.5rem;
    border-radius: 50%;
  }
  .span1{
    position: absolute;
    top: .5rem;
    left: 6rem;
  }
  .span2{
    position: absolute;
    bottom: .5rem;
    left: 6rem;
    font-size: 0.875rem;
    color: #8a8a8a;
  }
}
p{
  text-align: center;
  font-size: 14px;
  margin:1rem 0;
  color: #55cccc;
}
button{
  width: 90vw;
  border: none;
  outline: none;
  padding: 15px;
  border-radius: 3px;
  background-color: #55cccc;
  display:block;
  margin:0 auto;
  color: #fff;
  font-size: 18px;
}
</style>