<template>
  <div>
    <!-- 头部搜索开始 -->
    <div class="my_search">
      <router-link to="/shopping">
        <van-icon class="back" size="25px" color="#666" name="arrow-left" />
      </router-link>
      <router-link to="/search">
        <div class="textBox">
          <img src="../assets/img/index/shop/search.png" alt />
        </div>
      </router-link>
    </div>
    <!-- 头部搜索结束 -->
    <!-- 侧边导航栏开始 -->
    <div class="tabs">
      <!-- 左侧导航栏 -->
      <ul class="left_tabs">
        <!-- 用v-for的方式渲染li标签 -->
        <!-- 
          :class 根据三元表达式来决定是否添加类名
          @click 1.让当前点击的元素添加active类名 2.显示当前点击的元素所对应的组件
        -->
        <li
          v-for="(item,index) in menu"
          :key="index"
          :class="{active : ( isActive == item.value ? true : false )}"
          lazy-render
          @click="isActive = item.value;currentComp = item.comp"
        >{{item.name}}</li>
      </ul>
      <!-- 右边内容 -->
      <div class="right_content">
        <class1 :is="currentComp" :selected="isActive"></class1>
      </div>
      <!-- 侧边导航栏结束 -->
    </div>
  </div>
</template>
<script>
import class1 from "../components/Class_1";
export default {
  data() {
    return {
      currentComp: "class1",
      // 当前选中的li标签
      isActive: "1",
      menu: [
        {
          // li标签的内容
          name: "品牌",
          // 当前li标签是否选中的标识
          value: "1",
          // 点击当前li标签，要显示的组件
          comp: "class1",
        },
        {
          name: "系列",
          value: "2",
          comp: "class1",
        },
        {
          name: "球鞋",
          value: "3",
          comp: "class1",
        },
        {
          name: "潮搭",
          value: "4",
          comp: "class1",
        },
        {
          name: "箱包",
          value: "5",
          comp: "class1",
        },
        {
          name: "手表",
          value: "6",
          comp: "class1",
        },
        {
          name: "配饰",
          value: "7",
          comp: "class1",
        },
        {
          name: "美妆",
          value: "8",
          comp: "class1",
        },
        {
          name: "潮玩",
          value: "9",
          comp: "class1",
        },
        {
          name: "数码",
          value: "10",
          comp: "class1",
        },
        {
          name: "家居",
          value: "11",
          comp: "class1",
        },
        {
          name: "汽车",
          value: "12",
          comp: "class1",
        },
      ],
    };
  },
  components: {
    class1,
  },
};
</script>
<style lang="scss" scoped>
.my_search {
  position: fixed;
  top: 0;
  margin-bottom: 0.625rem;
  height: 40px;
  z-index: 3;
  background-color: #fff;
  display: grid;
  grid-template-columns: 5% 95%;
  place-content: center;
  & > a:first-child {
    display: block;
    width: 100vw;
    height: 26px;
  }
}
.van-tabs__content {
  margin-top: 70px;
}
.textBox {
  width: 82vw;
  height: 100%;
  overflow: hidden;
  position: relative;
  margin: 0 0 0 20px;
  display: flex;
  align-items: center;
  background-color: rgba($color: #e8e8e8, $alpha: 0.8);
  border-radius: 4px;
  img {
    width: 20px;
    height: 20px;
    margin-left: 8px;
  }
}
.back {
  margin: 0 0 0 7px;
}
.text {
  width: 100%;
  position: absolute;
  bottom: 0;
  display: block;
  margin: 0 0 5px 38px;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s linear;
}
.slide-enter {
  transform: translateY(20px) scale(1);
  opacity: 1;
}
.slide-leave-to {
  transform: translateY(-20px) scale(0.8);
  opacity: 0;
}
.tabs {
  width: 100vw;
  height: 100vh;
  margin-top: 50px;
}

.left_tabs {
  overflow: hidden;
  background: rgb(245, 245, 245);
  float: left;
  position: fixed;
  width: 20vw;
  height: 100vh;
  li {
    list-style: none;
    float: left;
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    text-align: center;
    margin-bottom: 5px;
    color: #000;
    border-bottom:1px solid #fff;
  }
  li.active {
    background-color: #fff;
    color: #328f95;
  }
}
.right_content{
  float: right;
  width: 80vw;
  margin-left:20vw ;
}
</style>