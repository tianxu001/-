<template>
  <div class="box">
    <header class="header-box">
      <img @click="back" src="../assets/img/dewuImage/left_back.png" alt />

      <span>编辑地址</span>

      <span class="s2" @click='submit'>保存</span>
    </header>

    <van-cell-group>
      <van-field label="收货人" placeholder="填写姓名" v-model="receiver"/> 

      <van-field label="联系电话" placeholder="填写手机号" :error-message="msg" v-model='cellphone' @blur="checkphone"/>

      <van-cell is-link @click="show = true" title="所在区域" value="请选择" v-model="carmodel" ref='province'></van-cell>

      <van-popup v-model="show" position="bottom" :style="{ height: '44%' }">
        <van-area
          :area-list="areaList"
          value="110101"
          @change="onChange"
          @confirm="onAddrConfirm"
          @cancel="show = false"
        />
      </van-popup>
    </van-cell-group>
    <van-field
      v-model="message"
      rows="2"
      autosize
      type="textarea"
      placeholder="请填写详细地址"
      show-word-limit
      ref='address'
    />
   <van-switch-cell v-model="checked" title="设置为默认地址" active-value='1' inactive-value='0' active-color='#0ac4c5' />
  </div>
</template>
<script>
import areaList from "../assets/js/area";
import {mapState} from 'vuex'
export default {
  data() {
    return {
      message: "",
      areaList,
      show: false,
      carmodel: "",
      receiver:'',
      cellphone:'',
      msg:'',
      checked:"0"
    };
  },
  computed:{
    ...mapState(['loginUser'])
  },
  methods: {
    checkphone(){
      // console.log(1)
        var phone=/^1[3-9]\d{9}$/;
            if(phone.test(this.cellphone.trim())){
              this.msg=''
              return true
            }else{
              this.msg="手机号格式错误"
              return false
            }
    },
    submit(){
      if(!this.receiver){
        this.$notify({
             duration: 1000,
             color: '#fff',
            background: '#0ac4c5',
            message:'收货人不能为空'
           });
      }
      if(this.checkphone()&&this.receiver){
      this.axios.post("/shop/address",
      `user_id=${this.loginUser.uid}&receiver=${this.receiver}&cellphone=${this.cellphone}&province=${this.carmodel}&address=${this.message}&is_detault=${this.checked}`
      ).then(res=>{
           this.$notify({
             duration: 1000,
             color: '#fff',
            background: '#ffe1e1',
            message:'提交成功'
           });
           this.$router.go(-1)
      })
      }
    },
    back() {
      this.$router.go(-1);
    },
    onChange(picker, value, index) {
      //   console.log("当前值：" + value  + "当前索引：" + index);
      let areaName = "";
      for (var i = 0; i < value.length; i++) {
        areaName = areaName + value[i].name + " ";
      }
      this.carmodel = areaName;
    },
    onAddrConfirm(e) {
      // 点击确认，获取所选的省市区数据
      // 确定选择,返回的必定是三元素数组
      //   console.log("this.onAddrConfirm=>e", e);
      this.province = e[0].name;
      this.city = e[1].name;
      this.district = e[2].name;
      this.flag = false;

      let areaName = this.province + " " + this.city + " " + this.district;
      this.carmodel = areaName;
      this.show = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
//   background-color: #f1f1f1;
}
.header-box {
  height: 8vh;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #000;

  img {
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    left: 1.25rem;
  }

  span {
    text-align: center;
    font-size: 18px;
    font-weight: 500;
  }
  .s2 {
    position: absolute;
    font-size: 16px;
    color: #30afb8;
    right: 1.25rem;
  }
}
.van-switch-cell{
    border-top:8px solid #f7f8fa ;
    border-bottom:8px solid #f7f8fa ;
}
</style>