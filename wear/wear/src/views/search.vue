<template>
  <div class="box">
    <div>
      <div class="searchBox">
        <input
          id="input"
          v-on:keydown.enter=" search_con()"
          v-model="value"
          type="text"
        />
        <span @click="back">取消</span>
      </div>
    </div>
    <div class="historyBox" v-if="arr.length > 0">
      <img class="clear" @click="empty" src="../assets/img/index/search/delete_icon.png" alt />
      <p class="history_text">历史记录</p>
      <div class="historyItem">
        <span id="bgc"  @click="toinput($event)" class="history" v-for="(k,i) of arr" :key="i">{{k}}</span><br>
      </div>
    </div>
    <div class="remen">
      <span class="history_text">热门搜索</span>
      <div class="refrash" @click="refrash">
        <van-icon name="replay" />
        <span>换一换</span>
      </div>
      <div class="remenItem">
        <span
          id="bgc"
          class="history"
          v-for="(item,index) of show"
          :key="index"
          @click="toinput($event)"
        >{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations,mapState } from "vuex";

export default {
  data() {
    return {
      n: "暂无搜索记录",
      value: '',
      // arr为搜索记录
      arr: [],
      remen: [
        { name: "Yeeze 350" },
        { name: "Air Jordan" },
        { name: "得物专属推荐" },
        { name: "杜兰特" },
        { name: "库里南" },
        { name: "欧文 5" },
        { name: "皮蓬" },
        { name: "丝绸" },
        { name: "跑鞋" },
        { name: "dunk sb" },
        { name: "冰淇淋" },
        { name: "贝壳头" },
        { name: "nike拖鞋" },
        { name: "aj6" },
        { name: "vlone" },
        { name: "科比" },
        { name: "詹姆斯17" },
        { name: "漫天星" },
        { name: "字母哥" },
        { name: "米切尔" },
        { name: "喷泡" },
        { name: "倒钩" },
        { name: "短袖" },
        { name: "椰子500" },
        { name: "川久保玲" },
        { name: "权志龙" },
        { name: "李宁 篮球鞋" },
        { name: "卡西欧" },
        { name: "陈奕迅" },
        { name: "冠军" },
        { name: "aj34" },
        { name: "AF1 女" },
      ],
      show: [],
    };
  },
    computed:{
    ...mapState(["search"])
  },
  methods: {
    // 清空历史记录
    empty() {
      this.$dialog
        .confirm({
          title: `确认删除全部历史记录`,
          confirmButtonText: "确定",
          confirmButtonColor: "#30afb8",
          cancelButtonText: "取消",
          width: "280px",
        })
        .then(() => {
          this.arr = [];
          localStorage.clear()
        })
        .catch(() => {
          // on cancel
        });
    },
    ...mapMutations(["getInput"]),


    // VUEX传值跳转
    search_con() {
      // 传值
      let input = document.getElementById("input");
      this.getInput(input.value);
      if(input.value.trim()!=""){
        this.arr.push(this.value)
        localStorage.setItem("msg",this.arr.toString());
        this.$router.push("/search_class");
      }
    },
    // 添加历史记录
    // addHistory() {
    //   if (this.arr.length < 12) {
    //     if (this.value.trim() != "") {
    //       this.arr.push(this.value.trim());
    //       // this.value = "";
    //     }
    //   } else {
    //     this.arr.shift();
    //     this.arr.push(this.value);
    //   }
    //   console.log(this.arr)
    // },
    toIndex() {
      this.$router.push("/");
    },

    back() {
      this.$router.go(-1);
    },

    refrash() {
      this.show = [];
      for (let i = 0; i < 14; i++) {
        var ran = parseInt(Math.random() * this.remen.length);
        this.show.push(this.remen[ran]);
      }
      this.show = [...new Set(this.show)];
      // console.log(this.show)
      return this.show;
    },
    toinput(e) {
      let text = document.getElementById("input");
      this.value = e.target.innerHTML;
      text.focus();
    },

    // history() {
    //   console.log("122")
    //   localStorage.setItem("msg",this.value);
    // },
  },

  mounted() {
    document.getElementById("input").focus();
    this.refrash();
    if(localStorage.getItem("msg")){ 
      for(var aa of localStorage.getItem("msg").split(',')){
          this.arr.push(aa)
      }
    }
    let input=document.getElementById("input");      
    input.placeholder=this.search;
  },
};
</script>

<style lang='scss' >
* {
  margin: 0;
  padding-top: 0;
  box-sizing: border-box;
  /* font-family: "simhei", Arial,  Helvetica,  sans-serif; */
}
.box {
  height: 100vh;
}
.searchBox {
  display: flex;
  align-items: center;
  span {
    display: block;
    margin-left: 5%;
    font-weight: bolder;
  }
}
.clear {
  float: right;
  width: 23px;
  margin-right: 6%;
}
.historyBox {
  margin-top: 6%;
  p {
    margin-left: 5%;
  }
}
.historyItem {
  width: 100vw;
  display: flex;
  flex-flow: wrap;
  margin: 3%;
  span {
    display: block;
    font-size: 14px;
    padding: 5px;
    background: #e8e8e8;
    border-radius: 5px;
    margin: 5px;
  }
}
.history_text {
  font-weight: bolder;
  color: #000;
}
input {
  margin: 0.315rem 0;
  width: 75vw;
  height: auto;
  display: block;
  margin-left: 5vw;
  height: 4vh;
  outline: none;
  border: none;
  background: url("../assets/img/index/search/search (6).png") no-repeat;
  background-position: 2% 42%;
  background-color: rgb(240, 240, 240);
  border-radius: 8px;
  text-indent: 30px;
}
.remen {
  margin-top: 6%;
  span {
    margin-left: 5%;
  }
}
.refrash {
  width: 60px;
  float: right;
  margin-right: 5%;
  font-size: 14px;
  color: #999;
}
.remenItem {
  width: 100vw;
  display: flex;
  flex-flow: wrap;
  padding: 5% 3% 0 3%;
  span {
    display: block;
    font-size: 14px;
    padding: 5px;
    background: #e8e8e8;
    border-radius: 5px;
    margin: 5px;
  }
}
</style>