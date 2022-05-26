<template>
  <div>
    <login-msg></login-msg>

    <van-row id="head">
      <van-col span="14">
        <router-link to="/">
          <img src="../../assets/img/index/fuwu/rili.png" />
          <span>{{theDay}}</span>
          发售日历
        </router-link>
      </van-col>
      <van-col span="5">
        <router-link to="/">
          <img src="../../assets/img/index/fuwu/zixun.png" />
          资讯
        </router-link>
      </van-col>
      <van-col span="5">
        <router-link to="/">
          <img src="../../assets/img/index/fuwu/wenda.png" />
          问答
        </router-link>
      </van-col>
    </van-row>
    <theNew></theNew>
    <dibu></dibu>
    <my-tabbar :select="select"></my-tabbar>
  </div>
</template>

<script scoped>
import dibu from "../../components/My-tabbar.vue";
import theNew from "../../components/theNew.vue";

export default {
  data() {
    return {
      theDay: 0,
      select:"service"
    };
  },
  components: {
    dibu,
    theNew,
  },
  created() {
    var aData = new Date();
    this.theDay = aData.getDate();
  },
};
</script>

<style lang="scss" scoped>
#head {
  padding: 1.5vh;
  font-size: 1vh;
}
#head a {
  color: black !important;
  font-weight: bolder;
}
#head img {
  height: 3.5vh;
  width: 3.5vh;
  vertical-align: middle;
}
#head span {
  position: absolute;
  top: 3vh;
  left: 1.5vh;
  text-align: center;
  width: 3.2vh;
  color: white;
  font-size: 1.5vh;
}
</style>