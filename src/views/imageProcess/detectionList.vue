<template>
  <div id="#AnExamination">
    <div class="container">
      <div class="container-left">
        <div class="container-left-box">
          <div
            class="container-left-info"
            v-for="item in fileList"
            :key="item.name"
          >
            <div>
              <img
                :src="`${item.response.files.file} `"
                alt=""
                class="container-left-info-img"
              />
            </div>
            <div class="container-left-info-text">
              <div class="step">
                <div>
                  <p>
                    <span>微信图片_20221107104307.jpg</span>
                  </p>
                </div>
                <p>是否是问题地图检查</p>
              </div>
              <div class="status">
                <p>40.9KB</p>
                <p>
                  <el-button
                    type="success"
                    round
                    icon="el-icon-check"
                  ></el-button
                  ><span style="color: #43ce5b">检查完成</span>
                </p>
              </div>
            </div>
            <!---->
          </div>
        </div>
      </div>
      <div class="container-right">
        <div class="title-box">
          <p class="title-box-text">微信图片_20221107130452 - 副本.jpg</p>
          <div>
            <el-button type="primary" size="mini">继续检查</el-button>
            <el-button type="primary" size="mini">导出结果</el-button>
          </div>
        </div>
        <div class="img-show-box">
          <img style="height: 430px" :src="fileList[1].response.files.file" />
        </div>
        <div class="instruction">
          <p>问题说明</p>
          <div class="problemContain">
            <div class="problem">阿克赛钦区域存在问题</div>
            <div class="problem">藏南区域存在问题</div>
            <div class="problem">钓鱼岛区域存在问题</div>
            <div class="problem">南海诸岛框缺失</div>
            <div class="problem">南海诸岛正确的概率为: 0.988</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
    };
  },
  created() {
    // if (this.fileList.length == 0) {
    //   this.$router.pusn({ path: "/imageprocess" });
    // }
    // this.fileList = this.$route.query.file
    //   ? [
    //       {
    //         name: "food.jpeg",
    //         response: {
    //           files: {
    //             file: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
    //           },
    //         },
    //       },
    //       {
    //         name: "food2.jpeg",
    //         response: {
    //           files: {
    //             file: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
    //           },
    //         },
    //       },
    //     ]
    //   : this.$route.query.file;
    this.fileList = this.$route.query.file;
    console.log(this.$route.query);
  },
  computed: {},
  methods: {},
};
</script>

<style lang="less" scoped >
#AnExamination {
  width: 100%;
  height: 856px;
  color: #000;
  background: #f1f1f1;
  padding-top: 30px;
}
.container {
  width: 1200px;
  height: 780px;
  color: #000;
  background: #f1f1f1;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  .container-left {
    margin-top: 30px;
    border-radius: 4px;
    width: 440px;
    height: 786px;
    background: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 20px 10px 20px 10px;
    .container-left-box {
      height: 100%;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      overflow-y: auto;
    }
    .container-left-info {
      width: 410px;
      height: 150px;
      border-radius: 4px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      margin-bottom: 15px;
      padding: 20px 10px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      cursor: pointer;
      border: 1px solid #2f8efe !important;
    }

    .container-left-info-img {
      width: 150px;
      height: 110px;
      margin-right: 10px;
    }
    .container-left-info-text {
      font-size: 12px;
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      .step {
        max-width: 160px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }

  .container-right {
    margin-top: 30px;
    border-radius: 4px;
    width: 730px;
    height: 786px;
    padding: 10px 35px 35px 35px;
    background: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    .title-box {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      .title-box-text {
        line-height: 40px;
        font-weight: 600;
        color: #333;
        font-size: 20px;
      }
    }
    .img-show-box {
      height: 430px;
      background: #fbfbfb;
      border-radius: 4px;
      border: 1px dashed #c1c1c1;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }
    .instruction {
      margin: 20px 0;
      display: block;
      .problemContain {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-transform: translateY(20px);
        transform: translateY(20px);
        .problem {
          font-size: 16px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          line-height: 22px;
          background: rgba(230, 32, 33, 0.1);
          height: 38px;
          border-radius: 4px;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          padding: 8px 10px;
          margin-top: 8px;
          color: #e62021;
          margin-left: 15px;
        }
      }
    }
  }
}
#AnExamination .disabledStyle {
  cursor: not-allowed !important;
}
.el-button.is-round {
  border-radius: 20px;
  padding: 0px 0px;
  margin-right: 2px;
}

.el-button--success {
  color: #fff;
  background-color: #43ce5b;
}
</style>

