<template>
  <div>
    <header class="header-box">
      <img @click="back" src="../assets/img/dewuImage/left_back.png" alt />
      <span>消息中心</span>
    </header>
    <!-- 官方通知 -->
    <div class="tongzhi" @click="toTongZhi">
      <van-cell class="title" title="官方通知" is-link />
      <img src="../assets/img/dewuImage/dewu_logo_black_100x100.png" alt />
      <span class="span2">年度最强篮球鞋，你站哪边？最热篮...</span>
      <span class="span3">2天前</span>
    </div>
    <!-- 评论和@ -->
    <div class="aite" @click="toAite">
      <van-cell class="title" title="评论和@" is-link />
      <img class="img" src="../assets/img/dewuImage/message (1).png" alt />
      <span class="span2">暂未收到评论和@ , 多去互动吧</span>
    </div>
    <!-- like 喜欢 -->
    <div class="like" @click="toLike">
      <van-cell class="title" title="喜欢和赞" is-link />
      <img class="img" src="../assets/img/dewuImage/like (1).png" alt />
      <span class="span2">暂未收到喜欢 , 多去互动吧</span>
    </div>
    <!-- attention--关注 -->
     <div class="attention" @click="toAttention">
      <van-cell class="title" title="关注你的" is-link />
      <img class="img" src="../assets/img/dewuImage/guanzhu1.png" alt />
      <span class="span2">暂未收到喜欢 , 多去互动吧</span>
    </div>
    <!-- private-letter -- 私信 -->
     <div class="private-letter" @click="tpPrivateLetter">
      <van-cell class="title" value="私信"  />
      <img class="img" src="../assets/img/dewuImage/private letter.png" alt />
      <span class="span2">暂无私信</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    toTongZhi() {
      this.$router.push("official-notice");
    },
    toAite(){
        this.$router.push('aite')
    },
     toLike() {
      this.$router.push("like");
    },
      toAttention() {
      this.$router.push("attention");
    },
        tpPrivateLetter() {
      this.$router.push("private-letter");
    },
    

  }
};
</script>

<style lang="scss" scoped>

*{
    margin:0;
    padding: 0;
}
$titile-size: 15px;
.private-letter {
  border-bottom: 1px solid rgb(245, 245, 245);
  position: relative;
  .title {
    font-size: $titile-size;
    font-weight: 500;
    color: #000;
  }
  .img {
    width: 30px;
    margin:0px 0.7rem 0.5rem 0.7rem;
    background-color: rgb(245,245,245);
    border-radius: 50%;
    padding: 5px;
  }
  .span2 {
    position: absolute;
    font-size: 0.875rem;
    font-weight: 500;
    color: #8a8a8a;
    top: 3.5rem;
  }
}

.attention {
  border-bottom: 1px solid rgb(245, 245, 245);
  position: relative;
  .title {
    font-size: $titile-size;
    font-weight: 500;
    color: #000;
  }
  .img {
    width: 30px;
    margin:0px 0.7rem 0.5rem 0.7rem;
    background-color: rgb(245,245,245);
    border-radius: 50%;
    padding: 5px;
  }
  .span2 {
    position: absolute;
    font-size: 0.875rem;
    font-weight: 500;
    color: #8a8a8a;
    top: 3.5rem;
  }
}
.like {
  border-bottom: 1px solid rgb(245, 245, 245);
  position: relative;
  .title {
    font-size: $titile-size;
    font-weight: 500;
    color: #000;
  }
  .img {
    width: 30px;
    margin:0px 0.7rem 0.5rem 0.7rem;
    background-color: rgb(245,245,245);
    border-radius: 50%;
    padding: 5px;
  }
  .span2 {
    position: absolute;
    font-size: 0.875rem;
    font-weight: 500;
    color: #8a8a8a;
    top: 3.5rem;
  }
}

.aite {
  border-bottom: 1px solid rgb(245, 245, 245);
  position: relative;
  .title {
    font-size: $titile-size;
    font-weight: 500;
    color: #000;
  }
  .img {
    width: 30px;
    margin:0px 0.7rem 0.5rem 0.7rem;
    background-color: rgb(245,245,245);
    border-radius: 50%;
    padding: 5px;
  }
  .span2 {
    position: absolute;
    font-size: 0.875rem;
    font-weight: 500;
    color: #8a8a8a;
    top: 3.5rem;
  }
}
.header-box {
  height: 8vh;
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
    display: inline-block;
    left: 43%;
    font-size: 18px;
    font-weight: 500;
    bottom: 0.8rem;
  }
}
.tongzhi {
  border-bottom: 0.5rem solid rgb(245, 245, 245);
  position: relative;
  margin-top: -0.625rem;
  .title {
    font-size: $titile-size;
    color: #000;
  }
  img {
    width: 3.125rem;
    margin: 0px 0.7rem 0.5rem 0.7rem;
  }
  .span2 {
    position: absolute;
    font-size: 0.875rem;
    font-weight: 500;
    color: #8a8a8a;
    top: 3.5rem;
  }
  .span3 {
    position: absolute;
    font-size: 0.8125rem;
    color: #bfbfbf;
    bottom: 1rem;
  }
}
</style>