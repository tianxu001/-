<template>
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <van-list
        v-model="loading"
        :finished="finished"
        @load="onLoad"
        >
        <div id="body">
            <router-link to="/xh_min">
               <div>
                    <div><strong>焕然洗护</strong><span>/ 专业清洗 全程包邮</span></div>
                    <van-row id="tp">
                        <van-col span="6"><img src="../assets/img/index/fuwu/1.png" alt=""></van-col>
                        <van-col span="6"><img src="../assets/img/index/fuwu/2.png" alt=""></van-col>
                        <van-col span="6"><img src="../assets/img/index/fuwu/3.png" alt=""></van-col>
                        <van-col span="6"><img src="../assets/img/index/fuwu/4.png" alt=""></van-col>
                    </van-row>
                </div>  
            </router-link>
           <router-link to="/">
                <div>
                    <div><strong>95分闲置</strong><span>/ 品质潮牌 低至三折</span></div>
                    <van-row id="tp">
                        <van-col span="6"><img src="../assets/img/index/fuwu/1.jpg" alt=""><span>省996</span></van-col>
                        <van-col span="6"><img src="../assets/img/index/fuwu/2.jpg" alt=""><span>省1050</span></van-col>
                        <van-col span="6"><img src="../assets/img/index/fuwu/3.jpg" alt=""><span>省1819</span></van-col>
                        <van-col span="6"><img src="../assets/img/index/fuwu/4.jpg" alt=""><span>省7000</span></van-col>
                    </van-row>
                </div> 
           </router-link>
            <router-link to="/">
                <div id="img">
                    <div><strong>鉴别服务开创者</strong><span>/ 六大品牌 专业鉴别 快速准确</span></div>
                    <van-row>
                        <van-col span="6"><img src="../assets/img/index/fuwu/dewu.jpg"></van-col>
                        <van-col span="10"><div><h1>74,089,848</h1><h6>累计鉴别超过</h6></div></van-col>
                        <van-col span="8"><van-button type="info">免费鉴别</van-button></van-col>
                    </van-row>
                    <div><i>讨论区 </i><span> / 数百位专业鉴别师阵容</span></div>
                    <div id="rm">
                        <span>热门</span>
                        <div>
                            <h5>欧文6,没有原盒,请各位大神帮我看看 </h5>
                            <h6>42条回复 4条鉴别师回复</h6> 
                        </div>
                    </div>
                    <div id="rm">
                        <span>热门</span>
                        <div>
                            <h5>今天捶捶了一个点开了微商的pyq，又双叒叕倍加写给污染了眼睛......我求求你造价也走点心好不好...</h5>
                            <h6>29条回复 2条鉴别师回复</h6> 
                        </div>
                    </div>
                    <div id="rm">
                        <span>热门</span>
                        <div>
                            <h5>各位大佬麻烦帮我看看，我上一条已经退货了，这次买了新的，希望不要翻车 </h5>
                            <h6>29条回复 2条鉴别师回复</h6> 
                        </div>
                    </div>
                    <div id="rm">
                        <span>热门</span>
                        <div>
                            <h5>今天捶捶了一个点开了微商的pyq，又双叒叕倍加写给污染了眼睛......我求求你造价也走点心好不好，这种不知道的。。。 </h5>
                            <h6>29条回复 2条鉴别师回复</h6> 
                        </div>
                    </div>
                </div> 
            </router-link>
           
        </div>
        
    </van-list>
  </van-pull-refresh>
</template>

<style scoped>
    #body{
        background-color: #e9e9e9;
        height: 100vh;
        padding-top: 0.5vh;
        list-style: none;
    }
    #img {
        width: 100% !important;
    }
    #img div:nth-child(2) div:nth-child(2){
        margin:8vh 0;
    }
    #img div button{
        margin:7vh -3vh;
    }
    #img img{
        margin-top: 2.5vh;
        margin-bottom: 2.5vh;
        width: 80%;
        padding: 1vh;
    }
    #body>a{
        color: black;
        line-height: 2.5vh;
        font-weight: 900;
    }
    #tp{
        text-align: center;
    }
    #tp img{
        width: 80%;
        padding: 1vh;
    }
    #body>a>div>div{
        display: flex;
    }
    #body>a span{
        display: block;
        font-size: 1vh;
        line-height: 2.5vh;
    }
    #body>a>div{
        padding: 1vh;
        margin: 1vh;
        background-color: #fff;
    }
    #body>a>div strong{
        font-size: 2.5vh;
        padding-right: 0.5vh;
    }
    #rm{
        margin-top: 3vh;
        width: 100%;
    }
    #rm span{
        background-color: rgb(0, 0, 0);
        color: white;
        font-weight: 100;
        font-size: 0.5vh;
        display: block;
        padding: 0.1vh 2vh;
        margin-right: 1vh;
        height: 2.5vh;
        margin-top: 1vh;
        width: 10vw;
    }
    #rm h5{
        font-size:2vw !important;
        font-weight: 600;
        color: #000;
    }
    h6{
        font-size: 1vh;
        font-weight: 100;
        color: #999; 
        margin-left: 1.8vh;
    }
</style>

<script>
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
    };
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
  },
};
</script>