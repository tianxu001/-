<template>
  <div> 
    <van-row id="hand">
      <van-col span="3"><router-link to="/xh_min"><img id="img" src="../../assets/img/index/fuwu/fh.png"></router-link></van-col>
      <van-col span="10"><span>服务介绍</span></van-col>
  </van-row>
    <van-tabs v-model="active" id="body" offset-top='2.5rem' sticky>
      <van-tab title="塑封包膜">    
        <img id="img" src="../../assets/img/index/fuwu/sfbm.png" alt="">
      </van-tab>
      <van-tab title="防水防污">
        <img id="img" src="../../assets/img/index/fuwu/fsfw.png" alt="">
      </van-tab>
    </van-tabs>
  </div>
</template>

<style scoped>
#hand {
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  background-color: #fff;
}
#hand span{
  display: block;
  padding-top: 0.75vh;
  font-size: 2.5vh;
  margin-top: 1.7vh;
}
#img{
  width: 100%;
}
#body img{
  padding-top: 2vh;
}
.van-tabs__line{
  background-color: black !important;
}
</style>

<script>
export default {
  data() {
    return {
      active: 2,
    };
  },
};
</script>
