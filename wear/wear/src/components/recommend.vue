<template>
  <div>
        
    <div class="goods_main">
        <!-- 1 -->
      <div class="goods_box" v-for="(p,i) of arr" :key="i"  data-i="i">
        <div class="goods_img">
          <img :src="p.imgPath" class="big_img" alt />
        </div>
        <div class="goods_text">
          <p>{{p.title}}</p>
          <div class="goods_user">
                <span class="user_msg">
                    <img :src="p.avatarImg" alt />
                    <span>{{p.imgContent}}</span> 
                </span> 
                <span class="user_thumb" @click="add(i)">
                    <!-- <img :src='isShow?img1:img2'  alt /> -->
                    <!-- <img src= class="hid_img" v-else  alt /> -->
                    <img :src="img1" v-if="p.isHeart" alt="">
                    <img :src="img2" v-else alt="">
                    <span>{{p.count}}</span>
                </span>
          </div>
        </div>
      </div>
      <!-- 1 -->
      <!-- 2 -->
      
      <!-- 2 -->
      
    </div>     
  </div>
</template>
<style lang="scss" scope>
// 推荐样式
.goods_main{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  
  .goods_box{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 10.625rem;
    .goods_img{
      .big_img{
        width:10.625rem;
      }
    }
    .goods_text{
      margin: 1rem;
      width: 10.625rem;
      p{
        font-size:1.125rem;
        color: #000;
        // text-align: center;
      }
      .goods_user{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1rem;

        .user_msg{
          display: flex;
          justify-content: center;
          align-items: center;
          
          img{
            width:2rem;
            height:2rem;
            border-radius:50%;
            margin:0.25rem;
          }

          span{
            font-size: 0.875rem;
            font-weight: bolder;
            color: #aaa;
          }
        }
        .user_thumb{
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          .hid_img{
            position: absolute;
            top: 0;
            left: 0;
            display: none;
          }
          img{
            width:1.25rem;
          }
          span{
            font-size: 1rem;
          }
        }
      }
    }
  }
}
//推荐样式
</style>
<script>
export default {
    data() {
      return {
        img1:require('../assets/img/index/dewu/du_trend_immersive_like_black.png'),
        img2:require('../assets/img/index/dewu/du_trend_ic_bottom_like.png'),
        arr:[
          {
            title:'白蓝上脚',
            avatarImg:require('../assets/img/index/1.jpg'),
            imgContent:'作者名中',
            imgPath:require('../assets/img/index/dewu/images/1bedfb22f1916658e38622280f73a330.jpg'),
            count:3,
            isHeart:true
          },
          {
            title:'粉红蔷薇',
            avatarImg:require('../assets/img/index/2.jpg'),
            imgContent:'久见东二',
            imgPath:require('../assets/img/index/dewu/images/2e1ef89cbc3b9139a8ffc562b0754f57.jpg'),
            count:12,
            isHeart:true
          },
          {
            title:'哈哈哈是啊',
            avatarImg:require('../assets/img/index/3.jpg'),
            imgContent:'林少爷23',
            imgPath:require('../assets/img/index/dewu/images/a10946d50aa2dd833ba0f0bf62f1974c.jpg'),
            count:33,
            isHeart:true
          },
          {
            title:'白蓝上脚',
            avatarImg:require('../assets/img/index/4.jpg'),
            imgContent:'我是里里',
            imgPath:require('../assets/img/index/dewu/images/7db7c50b5a6b3f0c04137d11ce9801f3.jpeg'),
            count:45,
            isHeart:true
          },
          {
            title:'白蓝上脚',
            avatarImg:require('../assets/img/index/5.jpg'),
            imgContent:'猛创意',
            imgPath:require('../assets/img/index/dewu/images/8f7d8836175633a0d00cef6b26d2e7a3.jpeg'),
            count:2,
            isHeart:true
          },
          {
            title:'白蓝上脚',
            avatarImg:require('../assets/img/index/6.jpg'),
            imgContent:'潮鞋快讯',
            imgPath:require('../assets/img/index/dewu/images/9e8d20705f0ca3e57c965eecc30f6476.jpg'),
            count:123,
            isHeart:true
          },
          {
            title:'白蓝上脚',
            avatarImg:require('../assets/img/index/7.jpg'),
            imgContent:'小青四条蛇',
            imgPath:require('../assets/img/index/dewu/images/10d4d2697c38405e07e6b9744de2c936.jpg'),
            count:43,
            isHeart:true
          },
          {
            title:'白蓝上脚',
            avatarImg:require('../assets/img/index/8.jpg'),
            imgContent:'爱荣大叔',
            imgPath:require('../assets/img/index/dewu/images/83d80966711f08c9b4fca2b22fe8ffe4.png'),
            count:37,
            isHeart:true
          },
          {
            title:'白蓝上脚',
            avatarImg:require('../assets/img/index/9.jpg'),
            imgContent:'Tiger_CY',
            imgPath:require('../assets/img/index/dewu/images/084c7670ea65695c140a2d08422188fe.jpg'),
            count:12,
            isHeart:true
          },
          {
            title:'白蓝上脚',
            avatarImg:require('../assets/img/index/10.jpg'),
            imgContent:'请叫我小雨哥',
            imgPath:require('../assets/img/index/dewu/images/94e3c31c3f2fe9cbc90a449ee630d9ba.jpg'),
            count:90,
            isHeart:true
          },
        ],
      }
    },
    methods: {
      add(i){
          //改变点赞状态,让当前值加一或减一
          if(this.arr[i].isHeart){
            this.arr[i].isHeart=false;
            this.arr[i].count++;
          }else{
                this.arr[i].isHeart=true;
                if(this.arr[i].count==0){
                  this.arr[i].count=0;
                }else{
                  this.arr[i].count--;
                } 
          }   
      }
    },
}
</script>