<template>
  <div class="shop">
    <div class="goods">
      <div>
        <div>
          <img v-lazy="require(`../assets/img/commodity/${img[0].icon}`)" @click='hide'/>
          <span>
            <h1>
              <span>￥</span><b>{{detail[0].price}}</b>
            </h1>
            <p>
              <img src="../assets/img/details/dewu_logo_gray_42x42.png" alt />
              <span>已选{{detail[0].specs}}</span>
            </p>
          </span>
        </div>
        <div>
          <img src="../assets/img/details/crop__ic_cancel.png" @click="close($event)" />
          <p>
            <span>交易模式</span>
            <img src="../assets/img/details/ic_identify_help_mark.png" alt />
          </p>
        </div>
      </div>
      <van-cell title="查看尺码对照表" is-link></van-cell>
      <ul @click='size'>
        <li v-for="(item,index) of detail" :key="index">
          <h1>{{item.specs}}</h1>
          <p><b>￥</b> <span>{{item.price}}</span></p>
        </li>
      </ul>

      <div @click="order">
        <div @click='total1($event)'>
            <div >闪电发货</div>
          <p>
            <span>￥{{parseInt(detail[0].price*1.1)}}</span>|
            约2天到
          </p>
        </div>
        <div @click='total2($event)'>
            <div><span>专享优惠</span><van-count-down :time="times" format=" HH 小时 mm 分" /></div>
          <p>
            <span>￥{{detail[0].price}}</span>|
            约5天到
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
    data(){
        return{
            times: `${parseInt(new Date("2022-05-18 10:00:00") - new Date())}`,
            // 控制登录注册页面是否显示
        }
    },
    computed:{
      ...mapState(['detail','sort','img'])
    },
    methods:{
      ...mapMutations(['total']),
      hide(){
        let carouselEle=document.getElementsByClassName('carousel')[0]
        carouselEle.style.display='block'
        console.log(carouselEle)
        console.log('carouselEle')
      },
      close(e) {
      this.$emit("close", e, false);
      let detailsEle=document.getElementsByClassName('details')[0]
      detailsEle.style.overflow="auto" 
    },

    
     // 跳转到order页面事件
    order(){
      if( !localStorage.getItem('uname')&&!sessionStorage.getItem('uname')){
        // this.isLogining=true;
          this.$router.push('/me')
      }else{
         this.$router.push("/order")
      }
    },



    // 闪电发货
    total1(e){
        let price1=document.querySelector('.goods div:last-child>div:first-child>p>span')
        let pspecsEle=document.querySelector('.goods span>p>span')
        let divEle=document.querySelector('.goods div:last-child>div:first-child>div')
        let price= price1.innerHTML.slice(1)
        let size=pspecsEle.innerHTML.slice(2)
        this.total({
          price:price,
          size:size,
          genre:divEle.innerHTML
        })
    },



    // 专享优惠
    total2(e){
        let price2=document.querySelector('.goods div:last-child>div:last-child>p>span')
        let pspecsEle=document.querySelector('.goods span>p>span')
        let divEle=document.querySelector('.goods div:last-child>div:last-child>div>span')
        let price= price2.innerHTML.slice(1)
        let size=pspecsEle.innerHTML.slice(2)
        this.total({
          price:price,
          size:size,
          genre:divEle.innerHTML
        })
    },



    // 选择规格
    size(e){
      let h1priceEle=document.querySelector('.goods span>h1>b')
      let pspecsEle=document.querySelector('.goods span>p>span')
      let price1=document.querySelector('.goods div:last-child>div:first-child>p>span')
      let price2=document.querySelector('.goods div:last-child>div:last-child>p>span')
      let liEle=document.querySelectorAll('.shop ul>li')
      // 让所有的规格边框为0
      for(var key of liEle){
        key.style.border='0'
      }
      if(e.target.nodeName=='LI'||e.target.nodeName=='H1'||e.target.nodeName=='P'){
        if(e.target.nodeName=='H1'||e.target.nodeName=='P'){
          if(e.target.nodeName=='P'){
            h1priceEle.innerHTML=e.target.lastElementChild.innerHTML
            price2.innerHTML=`￥${e.target.lastElementChild.innerHTML}`
            price1.innerHTML=`￥${parseInt(e.target.lastElementChild.innerHTML*1.1)}`
            pspecsEle.innerHTML=`已选${e.target.previousElementSibling.innerHTML}`
          }else{
            pspecsEle.innerHTML=`已选${e.target.innerHTML}`
            h1priceEle.innerHTML=e.target.nextElementSibling.lastElementChild.innerHTML
            price2.innerHTML=`￥${e.target.nextElementSibling.lastElementChild.innerHTML}`
            price1.innerHTML=`￥${parseInt(e.target.nextElementSibling.lastElementChild.innerHTML*1.1)}`
          }
          e.target.parentElement.style.border='2px solid #000'
        }else{
          pspecsEle.innerHTML=`已选${e.target.firstElementChild.innerHTML}`
          h1priceEle.innerHTML=e.target.lastElementChild.lastElementChild.innerHTML
           price2.innerHTML=`￥${e.target.lastElementChild.lastElementChild.innerHTML}`
           price1.innerHTML=`￥${parseInt(e.target.lastElementChild.lastElementChild.innerHTML*1.1)}`
          e.target.style.border='2px solid #000'
        }
      }
    }
    } 
};
</script>
<style lang="scss" scoped>
.shop {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  //  &>.carousel{
  //    position: fixed;
  //    top:0;
  //    z-index: 999;
  //     display: none;
  //     width: 100vw;
  //     height: 100vh;
  //     background-color:rgba(0,0,0,.4);
  //     &>div{
  //       width: 100vw;
  //        .van-swipe {
  //     height: 15rem;
  //     .van-swipe-item {
  //       img{
  //         width: 90vw;
  //       };
  //       text-align: center;
  //     }
  //   }
  //     }
  //   }
  &>.goods {
    width: 100vw;
    height: 85vh;
    position: fixed;
    bottom: 0;
    background-color: #fff;
    & > div:first-child {
      padding: 0.625rem;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #eee;
     &> div:first-child {
        & > img {
          padding: 0.875rem 0;
          width: 6.25rem;
          border: 1px solid #eee;
          float: left;
        }
        & > span {
          float: left;
          h1 {
            span {
              font-size: 0.875rem;
              font-weight: 600;
            }
            padding: 0;
            font-size: 1.75rem;
          }
          &>p {
            margin: 1.25rem 0;
            img {
              width: 1.25rem;
              margin: 0 0.625rem;
            }
            span {
              position: relative;
              top: -0.3125rem;
            }
          }
        }
      }
      & > div:last-child {
        text-align: right;
        padding-right: 1.25rem;
        & > img {
          width: 1.875rem;
        }
        p {
          margin: 1.25rem 0;
          font-size: 0.75rem;
          color: #999;
          span {
            position: relative;
            top: -0.3125rem;
          }
          img {
            width: 1.125rem;
            margin: 0 0.5rem;
          }
        }
      }
    }
    & > ul {
      list-style-type: none;
      display: flex;
      flex-flow: wrap;
      width: 100vw;
      background-color: #f7f8fa;
      justify-content: flex-start;
      &>li:first-child{
        border: 0.125rem solid #000;
      }
      &>li {
        box-sizing: border-box;
        // border: 0.375rem solid #f7f8fa;
        // padding: 0 1.25rem;
        width: 23vw;
        height: 23vw;
        padding: 5vw 0;
        margin: 0.3125rem 0.2rem;
        text-align: center;
        background-color: #fff;
        h1 {
          padding: 0;
          margin-bottom: 0.3125rem;
          font-size: 1.625rem;
          font-weight: 600;
        }
       &> p{
          margin: 0;
          color: #666;
        }
      }
    }
   & > div:last-child {
  width: 100% ;
  position: fixed;
  bottom: 0;
  height: 4.75rem;
  padding: 0.625rem;
  display: flex;
  text-align: center;
  background-color: #fff;
  &>div {
    height: 100%;
    width: 50%;
    position: relative;
     color: #fff;
    &>div{
        position: absolute;
        top: 0;
        right:0.625rem;
        background: rgba(0,0,0,.4);
        padding: 0.125rem 0.3125rem ;
        font-size:0.75rem ;
        .van-count-down{
            color: #fff;
            font-size: 0.75rem;
             display: inline;
        } 
    }
    &>p{
       margin: 0;
        line-height:3.75rem ;
        font-size: 0.875rem;
        span{
            font-weight: 600;
            font-size: 1.25rem;
            padding: 0 5px;
        }
    }
  }
  &>div:first-child {
    background-color: #20cbd7;
    margin-right: 0.875rem;
  }
  &>div:last-child {
    background-color: #333;
  }
}
  }
}

</style>