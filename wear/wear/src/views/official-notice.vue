<template>
  <div>
      <!-- <div class="header-box">
        <img @click="back" src="../assets/img/dewuImage/left_back.png" alt />
        <span>官方通知</span>
      </div> -->
      <div class="header" style="margin-bottom:7vh">
 <van-nav-bar   title="官方通知" fixed>
          <img @click="back" src="../assets/img/dewuImage/left_back.png" style="width:25px" slot="left" alt="">
      </van-nav-bar>
      </div>
    <section>
      <div class="box">
        <img src="../assets/img/dewuImage/dewu_logo_black_100x100.png" alt />
        <p class="span1">年度最强篮球鞋 你站哪边？最热篮球鞋Kobe灰绿 & YEEZY QNTM 发售！更有出价费率低至2.5 % ~</p>
        <span class="span2">2天前</span>
      </div>
      <div class="box">
        <img src="../assets/img/dewuImage/dewu_logo_black_100x100.png" alt />
        <p class="span1">直击现场! 最新Ambush x 宝格丽重磅联名发布会现场,观众席不能少了我的铁汁们 > > ></p>
        <span class="span2">2天前</span>
      </div>
      <div class="box">
        <img src="../assets/img/dewuImage/dewu_logo_black_100x100.png" alt />
        <p class="span1">年度最强篮球鞋 你站哪边？最热篮球鞋Kobe灰绿 & YEEZY QNTM 发售！更有出价费率低至2.5 % ~</p>
        <span class="span2">2天前</span>
      </div>
      <div class="box">
        <img src="../assets/img/dewuImage/dewu_logo_black_100x100.png" alt />
        <p class="span1">年度最强篮球鞋 你站哪边？最热篮球鞋Kobe灰绿 & YEEZY QNTM 发售！更有出价费率低至2.5 % ~</p>
        <span class="span2">2天前</span>
      </div>
      <div class="box">
        <img src="../assets/img/dewuImage/dewu_logo_black_100x100.png" alt />
        <p class="span1">年度最强篮球鞋 你站哪边？最热篮球鞋Kobe灰绿 & YEEZY QNTM 发售！更有出价费率低至2.5 % ~</p>
        <span class="span2">2天前</span>
      </div>
      <div class="box">
        <img src="../assets/img/dewuImage/dewu_logo_black_100x100.png" alt />
        <p class="span1">年度最强篮球鞋 你站哪边？最热篮球鞋Kobe灰绿 & YEEZY QNTM 发售！更有出价费率低至2.5 % ~</p>
        <span class="span2">2天前</span>
      </div>
      <div class="box">
        <img src="../assets/img/dewuImage/dewu_logo_black_100x100.png" alt />
        <p class="span1">年度最强篮球鞋 你站哪边？最热篮球鞋Kobe灰绿 & YEEZY QNTM 发售！更有出价费率低至2.5 % ~</p>
        <span class="span2">2天前</span>
      </div>
      <div class="box">
        <img src="../assets/img/dewuImage/dewu_logo_black_100x100.png" alt />
        <p class="span1">年度最强篮球鞋 你站哪边？最热篮球鞋Kobe灰绿 & YEEZY QNTM 发售！更有出价费率低至2.5 % ~</p>
        <span class="span2">2天前</span>
      </div>
      <div class="box">
        <img src="../assets/img/dewuImage/dewu_logo_black_100x100.png" alt />
        <p class="span1">年度最强篮球鞋 你站哪边？最热篮球鞋Kobe灰绿 & YEEZY QNTM 发售！更有出价费率低至2.5 % ~</p>
        <span class="span2">2天前</span>
      </div>
      <div class="box">
        <img src="../assets/img/dewuImage/dewu_logo_black_100x100.png" alt />
        <p class="span1">年度最强篮球鞋 你站哪边？最热篮球鞋Kobe灰绿 & YEEZY QNTM 发售！更有出价费率低至2.5 % ~</p>
        <span class="span2">2天前</span>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    back(){
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>

.header-box {
  height: 10vh;
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
    left: 43%;
    font-size: 18px;
    font-weight: 500;
    bottom: 0.8rem;
  }
}
.box {
  position: relative;
  padding: 0.625rem;
  height: 14vh;
  border-bottom: 1px solid #e9e9e9;
  img {
    position: absolute;
    left: 0.625rem;
    width: 3.125rem;
    margin-right: 0.9375rem;
  }
  p {
    position: absolute;
    left: 4.375rem;
    line-height: 1.5;
  }
  span {
    position: absolute;
    font-size: 0.8125rem;
    color: #bfbfbf;
    bottom: 0.5rem;
    left: 4.3rem;
  }
}
</style>