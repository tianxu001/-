<template>
  <div class='content'>
    <div class="title">
      <span class="line">———</span>
      <span>热门系列</span>
      <span class="line">———</span>
    </div>
    <div class="grid">
      <div v-for="(item,index) of all_details" :key="index">
        <router-link to="/">
          <img v-lazy="item.all_img" alt />
          <p class="brand_text" v-if="item.asort_id !=1">{{item.all_brand}}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["selected"],
  data() {
    return {
      all_details: [],
      busy: false,
    };
  },
  methods: {
    loadData() {
      this.busy = true;
      this.$indicator.open({
        text: "加载中...",
        spinnerType: "fading-circle",
      });
      this.axios.get("/shop/class?asort_id=" + this.selected).then((res) => {
        // this.all_details = res.data.results;
        let data = res.data.results;
        data.forEach((item) => {
          item.all_img = require("../assets/img/commodity/" + item.all_img);
          item.all_text = data.all_brand;
          this.all_details.push(item);
        });
        this.$indicator.close();
        this.busy = false;
      });
    },
  },
  watch: {
    selected() {
      //清空原来有的数据，为下一次切换腾出位置
      this.all_details = [];
      this.loadData();
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>
<style lang="scss" scoped>

.title {
  font-weight: bold;
  font-size: 14px;
  margin: 5% 0 0 25%;

  .line {
    color: #e8e8e8;
  }
}
.grid {
  display: grid;
  grid-template-columns: 31% 31% 31%;
  place-content: center;
  margin-bottom:50px;
  div {
    a {
      display: block;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 93px;
      height: 20vh;
      flex-flow: column;
      overflow: hidden;
      box-sizing: border-box;
      img {
        width: 60%;
        margin-bottom: 10px;
      }
      .brand_text {
        text-align: center;
        font-size: 8px;
        font-weight: bold;
        color: #000;
      }
    }
  }
}
</style>