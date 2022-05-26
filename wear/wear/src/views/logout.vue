<template>
<div>
    <header class="header-box">
        <img @click="back" src="../assets/img/dewuImage/left_back.png" alt />
        <span>账号注销</span>
    </header>
    <div class="box">
        <h4>得物平台用户注销规则</h4>
        <p class="p1">得物App提醒您,账户一旦注销,您在平台的所有权益(包括但不限于优惠券、红包、毒币、卖家激励等)都一并失效. 如果您执意放弃账户,须同时满足一下条件:</p>
        <h6>1、您的账户得物App上没有未完结订单（完结订单：已收货、已取消、已关闭的订单），且您购买的完结订单都超过90天。如您同时作为个人卖家出售或转让的商品，为保护买家利益您如需注销账户，则您出售的订单必须超过90天。</h6>
        <h6>2、您的账户在得物App上没有现金未提取</h6>
        <h6>3、您的账户没有未解决的纠纷记录，纠纷记录包括但不限于投诉举报或被投诉举报至平台或工商、税务、消协等行政主管部门、您与交易相对方或平台之间存在司法纠纷等</h6>
        <br />
        <h4>温馨提示</h4>
        <p class="p2">1、得物App账户不满足以上任意一项或多项条件的，账户将无法注销，请等待上述情况消失之后在提交账户注销申请。</p>
        <p class="p2">2、符合注销条件，将会在一个工作日内完成账号注销，后续有任何问题可随时联系在线客服咨询</p>

        <button>同意并注销</button>
    </div>
</div>
</template>

<script>
export default {
    methods: {
        back() {
            this.$router.go(-1);
        }
    }
};
</script>

<style lang="scss" scoped>
.box {
    padding: 0 1.25rem;
    line-height: 1.5;
    color: #000;

    .p1 {
        margin-top: 0.625rem;
        font-size: 14px;
        font-weight: 500;
    }

    h6 {
        margin-top: 0.625rem;
        font-size: 12px;
    }

    .p2 {
        font-size: 12px;
        margin-top: 0.625rem;
    }

    button {
        padding: 0.5rem;
        display: block;
        width: 80vw;
        margin: 3rem auto;
        border: none;
        outline: none;
        background-color: #55cccc;
        color: #fff;
    }
}

.header-box {
  height: 8vh;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  color: #000;

  img {
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    left: 1.25rem;
  }

  span {
    display: inline-block;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    bottom: 0.8rem;
  }
}
</style>
