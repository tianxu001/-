<template>
  <div>
    <div>
      <!-- 发现好友头部 -->
      <div class="header_tab">
        <router-link to="/me">
          <img src="../assets/img/index/arrow-down.png" alt="" />
        </router-link>

        <div class="title_text">我的关注</div>
      </div>
      <!-- 发现好友头部 -->
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <!-- 微博和兴趣达人跳转部分 -->
        <div class="friend_link">
          <div class="wb">
            <div class="wb_msg">
              <img
                src="../assets/img/index/dewu/ic_recommend_weibo.png"
                alt=""
              />
              <div class="wb_text">微博好友</div>
            </div>
            <div class="wb_link">
              <router-link to="/concern">
                看看谁在这里
                <span>
                  <img
                    src="../assets/img/index/dewu/ic_bill_arrow.png"
                    alt=""
                  />
                </span>
              </router-link>
            </div>
          </div>
          <div class="wb">
            <div class="wb_msg">
              <img
                src="../assets/img/index/dewu/du_trend_ic_share_generate_pictures.png"
                alt=""
              />
              <div class="wb_text">兴趣达人</div>
            </div>
            <div class="wb_link">
              <router-link to="/concern">
                看看谁在这里
                <span>
                  <img
                    src="../assets/img/index/dewu/ic_bill_arrow.png"
                    alt=""
                  />
                </span>
              </router-link>
            </div>
          </div>
        </div>
        <!-- 微博和兴趣达人跳转部分 -->
        <!-- 关注好友列表 -->
        <ul>
          <li v-for="(p, index) of concerns" :key="index">
            <div class="friend_avatar">
              <img :src="p.avatarImg" alt="" />
              <div class="friend_present">
                <h2>
                  {{ p.nickname }}
                  <span class="man_color" v-if="p.sex == '1'">♂</span>
                  <span class="woman_color" v-else>♀</span>
                </h2>
                <p>{{ p.autograph }}</p>
              </div>
              <van-button
                id="btn"
                class="btn"
                :class="[p.status ? 'btn-default' : 'btn-check']"
                :icon="p.status ? 'plus' : ''"
                type="primary"
                @click="tansform($event)"
                :data-index="index"
                >{{ p.status ? "关注" : "已关注" }}</van-button
              >
            </div>
          </li>
        </ul>
        <!-- 关注好友列表 -->
      </van-pull-refresh>
    </div>
  </div>
</template>
<style lang="scss">
.man_color {
  color: #00c2c2;
  font-size: 1.25rem;
  font-weight: bolder;
}
.woman_color {
  color: #f00;
  font-size: 1.25rem;
  font-weight: bolder;
}
.header_tab {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.25rem 0;
  img {
    width: 2rem;
    padding-left: 0.5rem;
    margin-right: 2rem;
  }
  .title_text {
    color: #000;
    font-size: 1.125rem;
    // font-weight: bolder;
  }
}
.friend_link {
  border-bottom: 0.0625rem solid rgb(220, 220, 220);
  .wb {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .wb_msg {
      display: flex;
      align-items: center;
      img {
        width: 2.5rem;
        margin: 1rem;
      }
      .wb_text {
        color: #000;
        font-size: 1rem;
        font-weight: bolder;
      }
    }
    .wb_link {
      margin-right: 1rem;
      a {
        display: flex;
        align-items: center;
        color: #aaa;
        text-decoration: none;
        font-size: 0.75rem;
        img {
          width: 1.125rem;
        }
      }
    }
  }
}
ul {
  list-style: none;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .friend_avatar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 4rem;
    padding-bottom: 0.625rem;
    img {
      width: 3rem;
      padding: 0.625rem;
      border: 1px solid rgb(220, 220, 220);
      border-radius: 50%;
    }
    .friend_present {
      width: 6.25rem;
      margin-top: 0.25rem;
      margin-left: -4rem;
      h2 {
        color: #000;
        font-weight: bolder;
        font-size: 0.85rem;
        padding-bottom: 0.5rem;
      }
      p {
        font-size: 0.75rem;
        color: #999;
      }
    }
    .btn {
      width: 4rem;
      height: 1.5rem;
      font-size: 0.75rem;
      font-weight: bolder;
      text-align: center;
      outline: none;
      border: 0;
    }
    .btn-default {
      color: #cbf5f6;
      background-color: #00c2c2;
    }
    .btn-check {
      border: 0.0625rem solid #aaa;
      background-color: transparent;
      color: #aaa;
    }
    .van-button--normal {
      padding: 0;
    }
  }
}
</style>
<script>
import { Toast } from "vant";
import { Dialog } from "vant";
import { mapMutations, mapState } from "vuex";
export default {
  components: {
    [Dialog.Component.name]: Dialog.Component,
  },
  data() {
    return {
      isLoading: false,
      index: 0,
    };
  },
  methods: {
    ...mapMutations(["delConcern"]),
    onRefresh() {
      setTimeout(() => {
        Toast("已经没有内容了");
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
    tansform(e) {
      let index = e.target.dataset.index;
      console.log(index);
      if (!this.concerns[index].status) {
        // this.concerns[id].status=0;
        this.btnText = "已关注";
        Dialog.confirm({
          title: "提示",
          message: "确定不再关注此人",
        })
          .then(() => {
            // on confirm
            let index = e.target.dataset.index;
            this.delConcern(index);
            this.btnText = "关注";
          })
          .catch(() => {
            // on cancel
          });
      }
    },
  },
  computed: {
    ...mapState(["concerns"]),
  },
};
</script>