<template>
    <div class="my-tabbar">
        <van-tabbar v-model="active" active-color="black">
            <van-tabbar-item dot name="dw">
                <span>得物</span>
                <img src="../assets/img/index/tabbar/ic_tab_trend_seleted.png" slot="icon" v-if="active=='dw'">
                <img src="../assets/img/index/tabbar/ic_tab_trend_gray.png" slot="icon" v-else>
            </van-tabbar-item>
            <van-tabbar-item name="shopping">
                <span>购买</span>
                <img src="../assets/img/index/tabbar/ic_tab_mall_selected.png" slot="icon" v-if="active=='shopping'">
                <img src="../assets/img/index/tabbar/ic_tab_mall_nor.png" slot="icon" v-else>
            </van-tabbar-item>
            <van-tabbar-item name="service">
                <span>服务</span>
                <img src="../assets/img/index/tabbar/ic_tab_service_selected.png" slot="icon" v-if="active=='service'">
                <img src="../assets/img/index/tabbar/ic_tab_service_gray.png" slot="icon" v-else>
            </van-tabbar-item>
            <van-tabbar-item name="me">
                <span>我</span>
                <img src="../assets/img/index/tabbar/ic_tab_user_sel.png" slot="icon" v-if="active=='me'">
                <img src="../assets/img/index/tabbar/ic_tab_user_nor.png" slot="icon" v-else>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    // 取得父组件传的select
    props:['select'],
    data(){
        return {
            // 将选中的路径给active
            active:this.select,
        }
    },
    watch:{
        active(value){
            // value为点击对应的路径，dw、shopping、service、me
            // console.log(value)
           if(value=='shopping'){
               this.$router.push('/')
           }else{
               this.$router.push(`/${value}`)
           }
        }
    },
}
</script>

<style lang='scss' scoped>
    .my-tabbar{
        .van-tabbar{
            height: 3.625rem;
            border-top: 0.0625rem solid rgb(230, 230, 230);
            img{
                width: 1.75rem;
                height: 1.75rem;
            }
        }
        
    }
</style>