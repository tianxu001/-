<template>
  <div>
    <login-msg></login-msg>

    <My_search></My_search>
    <div class="main">
      <!-- 选项卡开始 -->
      <van-tabs v-model="active" animated swipe-threshold="6">
        <van-tab title="推荐" lazy-render="true">
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <My_tuijiancontent></My_tuijiancontent>
          </van-pull-refresh>
        </van-tab>
        <van-tab title="鞋类">
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <My_shoecontent></My_shoecontent>
          </van-pull-refresh>
        </van-tab>
        <van-tab title="手表">
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <My_watchcontent></My_watchcontent>
          </van-pull-refresh>
        </van-tab>
        <!-- <van-tab  v-for="(item,index) in sort" :key="index" :title="item.name">
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh"> 
            <My_clothcontent></My_clothcontent>
          </van-pull-refresh>
        </van-tab> -->
        <van-tab title="衣服">
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <My_clothcontent></My_clothcontent>
          </van-pull-refresh>
        </van-tab>
        <van-tab title="裤子">
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <My_kuzi></My_kuzi>
          </van-pull-refresh>
        </van-tab>
      </van-tabs>
      <!--选项卡结束 -->
    </div>
    <!-- 底部选项卡开始 -->
    <my-tabbar class="bottom" :select="select"></my-tabbar>
    <!-- 底部选项卡结束 -->
  </div>
</template>
<script>
import My_search from "../components/My_search";
import My_tuijiancontent from "../components/My_tuijiancontent";
import My_shoecontent from "../components/My_shoecontent";
import My_watchcontent from "../components/My_watchcontent";
import Empty from "../components/empty";
import My_clothcontent from "../components/My_clothcontent"
import My_kuzi from "../components/My_kuzi"
import { Toast } from "vant";
export default {
  data() {
    return {
      active: "",
      select: "shopping",
      isLoading: false,
      sort: [
        { name: "衣服" },
        { name: "裤子" },
        // { name: "配饰" },
        // { name: "潮玩" },
        // { name: "运动" },
        // { name: "数码" },
        // { name: "美妆" },
        // { name: "家具" },
        // { name: "汽车" },
        // { name: "家电" },
      ],
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
      }, 1000);
    },
  },
  components: {
    My_search,
    My_tuijiancontent,
    My_shoecontent,
    My_watchcontent,
    Empty,
    My_clothcontent,
    My_kuzi
  },
};
</script>
<style lang="scss" >
.main {
  margin-bottom: 20%;
}

.main>.van-tabs--line .van-tabs__wrap {
  width: 100vw;
  position: fixed;
  top: 36px;
  z-index: 4;
}
.van-tab--active {
  font-size: 0.9375rem !important;
  font-weight: bold !important;
  border: 0 !important;
}
.van-tabs__line {
  display: none !important;
}
</style>