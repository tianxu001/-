<template>
  <div class="my_search">
    <router-link to="/search">
      <div class="textBox" >
        <img src="../assets/img/index/shop/search.png" alt />
        <transition name="slide">
          <p @click="getsearch($event)" style="color:#999" class="text" :key="text.id">{{text.val}}</p>
        </transition>
      </div>
    </router-link>
    <router-link to="/class">
      <img class="my_all" src="../assets/img/index/shop/ic_mall_home_category.png" alt />
    </router-link>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "scroll",
  data() {
    return {
      textArr: ["nike", "卡西欧", "权志龙","李宁","王一博"],
      number: 0,
    };
  },
  computed: {
    text() {
      return {
        id: this.number,
        val: this.textArr[this.number],
      };
    },
  },
  mounted() {
    this.startMove();
  },
  methods: {
    startMove() {
      // eslint-disable-next-line
      let timer = setTimeout(() => {
        if (this.number === 4) {
          this.number = 0;
        } else {
          this.number += 1;
        }
        this.startMove();
      }, 2000); // 滚动不需要停顿则将2000改成动画持续时间
    },  
    ...mapMutations(["getSearch"]),
    getsearch(e){
    let search=e.target.innerHTML;
    this.getSearch(search);
  }
  },

};
</script>
<style lang="scss" scoped>

.my_search {
  position: fixed;
  top: 0;
  margin-bottom: 0.625rem;
  height: 36px;
  z-index:5;
  background-color: #fff;
  &>a:first-child{
    display: block;
    width: 100vw;
    height: 26px;
  }
}
.my_all {
  width: 1.5625rem;
  position: absolute;
  top: 5px;
  right: 5%;
}

.van-tabs__content{
  margin-top:70px
}
.textBox {
  width: 80%;
  height: 100%;
  overflow: hidden;
  position: relative;
  margin: 5px 0 0 20px;
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
</style>