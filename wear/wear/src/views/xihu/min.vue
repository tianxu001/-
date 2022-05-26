<template>
  <div>
    <div id="hands">
          <van-row id="hand">
            <van-col span="3"><router-link to="/service"><img  id="img" src="../../assets/img/index/fuwu/fhb.png"></router-link></van-col>
            <van-col span="13"></van-col> 
            <van-col span="3"><img id="img"  src="../../assets/img/index/fuwu/dd.png"></van-col>
            <van-col span="3"><img  id="img" src="../../assets/img/index/fuwu/slh.png"></van-col>
        </van-row>
      </div>
      <div id="hand1">
        <van-row>
            <van-col span="3"><router-link to="/service"><img src="../../assets/img/index/fuwu/fh.png"></router-link></van-col>
            <van-col span="14"><span>焕然洗护</span></van-col> 
            <van-col span="3"><img src="../../assets/img/index/fuwu/dd1.png"></van-col>
            <van-col span="3"><img src="../../assets/img/index/fuwu/slh1.png"></van-col>
        </van-row>
      </div>
    <img id="img" src="../../assets/img/index/fuwu/xihu1.jpg">
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item><router-link to="/xh"><img src="../../assets/img/index/fuwu/lb1.jpg"></router-link></van-swipe-item>
    <van-swipe-item><router-link to="/jgzy"><img src="../../assets/img/index/fuwu/lb2.jpg"></router-link></van-swipe-item>
  </van-swipe>
  
    <van-tabs id="body" class="guidongxi" scrollspy sticky >
      <van-tab :title="'洗后晒图'">
        <img src="../../assets/img/index/fuwu/lc.jpg">
        <router-link to="" rel="external" id="xh">
          <van-row>
            <van-col span="17"><h1>洗后晒图</h1></van-col>
            <van-col span="5"><h2>查看全部</h2></van-col>
            <van-col span="1"><h2>></h2></van-col>
          </van-row>
          <van-row>
              <van-col span="6"><img src="../../assets/img/index/fuwu/xh1.jpg"></van-col>
              <van-col span="6"><img src="../../assets/img/index/fuwu/xh2.jpg"></van-col>
              <van-col span="6"><img src="../../assets/img/index/fuwu/xh3.jpg"></van-col>
              <van-col span="6"><img src="../../assets/img/index/fuwu/xh4.jpg"></van-col>
          </van-row>
        </router-link>
      </van-tab>
      <van-tab :title="'购买记录'">
        <router-link id="gm" to="">
          <van-row>
                <van-col span="16"><h1>购买记录</h1></van-col>
                <van-col span="6"><h2>94561人买过</h2></van-col>
                <van-col span="1"><h2>></h2></van-col>
          </van-row>
          <van-row id="qx1">
              <van-col span="3">img</van-col>
              <van-col span="7"><h4>爱***啊</h4></van-col>
              <van-col span="7"><h4>清洗一双</h4></van-col>
              <van-col span="7"><h4>11分支前</h4></van-col>
          </van-row>
          <van-row id="qx1">
              <van-col span="3">img</van-col>
              <van-col span="7"><h4>爱***啊</h4></van-col>
              <van-col span="7"><h4>清洗一双</h4></van-col>
              <van-col span="7"><h4>11分支前</h4></van-col>
          </van-row>
          <van-row id="qx1">
              <van-col span="3">img</van-col>
              <van-col span="7"><h4>爱***啊</h4></van-col>
              <van-col span="7"><h4>清洗一双</h4></van-col>
              <van-col span="7"><h4>11分支前</h4></van-col>
          </van-row>
        </router-link>
      </van-tab>
      <van-tab :title="'清洗范围'">
        <router-link id="qx" to="/qx">
    <van-row>
      <van-col span="19"><h1>清洗范围</h1></van-col>
      <van-col span="3"><h2>更多</h2></van-col>
      <van-col span="1"><h2>></h2></van-col>
    </van-row>
    <van-row>
      <van-col span="12">
              <div><h3>不可清洗</h3></div>
              <van-row>
                <van-col span="12">
        <img  src="../../assets/img/index/fuwu/x1.jpg">
                </van-col>
                <van-col span="12">
        <img  src="../../assets/img/index/fuwu/x2.jpg">
                </van-col>
              </van-row>
            </van-col>
            <van-col span="12">
              <div><h3>支持清洗</h3></div>
              <van-row>
                <van-col span="12">
        <img  src="../../assets/img/index/fuwu/x3.jpg">
                </van-col>
                <van-col span="12">
        <img  src="../../assets/img/index/fuwu/x4.jpg">
                </van-col>
              </van-row>
            </van-col>
          </van-row>
        </router-link>
      </van-tab>
      <van-tab :title="'品质专业'">
        <img id="fuwu1" src="../../assets/img/index/fuwu/fuwu2.png">
      </van-tab>
      <van-tab :title="'工序严格'">
  <img id="fuwu2" src="../../assets/img/index/fuwu/fuwu5.png">
      </van-tab>
      <van-tab :title="'取送安心'">
  <img id="fuwu3" src="../../assets/img/index/fuwu/fuwu4.png">
      </van-tab>
      <van-tab :title="'常见问题'">
  <img id="fuwu4" src="../../assets/img/index/fuwu/fuwu3.png">
      </van-tab>
    </van-tabs>
    <div id="foo1">
    .
  </div>
  <router-link id="fot" to="/qrdd">
    <button>立即购买<h5>最高可减37元</h5></button>
  </router-link>
  </div>
</template>

<style lang="scss" scoped>
/deep/ .van-tabs--line .van-tabs__wrap{
  position: relative !important;  
  top: 3rem;
}
#img{
  width: 100%;
}
#foo1{
  margin: 7vh 0;
}
#fot{
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  border: 3vh solid #fff;
}
#body{
  background-color: #fff;
}
#hands{
  position: fixed;
  width: 100%;
  padding: 1vh;
}
#hand img{
  width: 4vh;
  margin-left: 2vh;
}
#body img{
  width: 100%;
}
.van-col{
  padding: 1vh;
}
h1{
  font-size: 2.9vh;
  font-weight: 900;
  color: #000;
}
h2{
  font-size: 1.5vh;
  color: #999;
  font-weight: 100;
}
h3{
  margin-left: 2vh;
  font-size: 1vh;
  color: #000;
  padding-top: 1vh;
}
h5{
  display: inline-block;
  color: rgb(0, 102, 255);
  height: 3vh;
  line-height: 1vh;
  background-color: #fff;
  font-size: 0.5vh;
  padding: 1vh;
  margin-left: 1vh;
  font-weight: 400;
}
button{
  width: 100%;
  height: 8vh;
  line-height: 8vh;
  background-color: rgb(0, 100, 255);
  color: white !important;
  border: 0;
}
button:active{
  background-color: rgb(5, 82, 199);
}
#body #qx1{
  background-color: #e9e9e9 ;
  font-weight: 700;
  font-size: 1vh;
  color: #000;
  border: 1vh solid #fff;
}
.my-swipe{
  height:18vh;
  width: 90%;
  margin: 0 auto;
  margin-top: -7vh;
}
.my-swipe img{
  width: 100%;
}

  #hand1{
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #fff;
    color: #000;
    z-index: 100;
    display: none;
    line-height: 3rem;
    height: 3rem;
  }
  #hand1 span{
    position: absolute;
    top: 0;
  }
  #hand1 img{
  width: 4vh;
  margin-left: 2vh;
  }
  #hand1 ul{
    display: flex;
    white-space: nowrap;
    overflow: scroll;
  }
  #hand1 li>a{
    display: block;
    padding:2vh;
    color: #105bbe;
    font-weight: 600;
    padding-bottom: 3vh;
  }
</style>

<script>
export default {
  methods:{
      scrollToTop(){
      var scrollaTop=document.getElementById("body").scrollTop||
      document.documentElement.scrollTop;
      // console.log('')
      if(scrollaTop>=200){
        document.getElementById("hands").style.display="none"
        document.getElementById("hand1").style.display="block"
      }else{
        document.getElementById("hands").style.display="block"
        document.getElementById("hand1").style.display="none"
      }
    }
  },mounted () {
    window.addEventListener('scroll', this.scrollToTop)
  },
  beforeDestroy() {
    window.removeEventListener("scroll",this.scrollToTop)
  }
}     
</script>