<template>
  <div id="#AnExamination">
    <div class="container">
      <div class="container-left">
        <div class="container-left-box">
          <div
            :class="{ 'container-left-info': true, disabledStyle: true }"
            v-for="item in fileList"
            :key="item.uid"
            @click="getCurrentImage(item)"
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
                    <span>{{ item.name.substring(0,17) }}...</span>
                  </p>
                </div>
              </div>
              <div class="status">
                <p>{{ (item.size / 1024).toFixed(2) }}Kb</p>
                <p v-if="processed">
                  <el-button
                    type="success"
                    round
                    icon="el-icon-check"
                  ></el-button
                  ><span style="color: #43ce5b">检查完成</span>
                </p>
                <p v-else>
                  <el-button type="info" round icon="el-icon-more"></el-button
                  ><span style="color: #999">等待中</span>
                </p>
              </div>
            </div>
            <!---->
          </div>
        </div>
      </div>
      <div>
        <div class="container-right">
          <div class="yolo">
            <div class="title-box">
              <p class="title-box-text" v-if="processed">
                {{ currentImage.name.substring(0,30) }}...
              </p>
              <p class="title-box-text" v-else>正在快速检测中</p>
              <div>
                <el-button
                  type="primary"
                  size="mini"
                  v-if="processed"
                  @click="toPage"
                  >继续检查</el-button
                >
                <el-button
                  type="primary"
                  size="mini"
                  v-if="processed"
                  @click="getRcnn"
                  >对比RCNN模式</el-button
                >
              </div>
            </div>
            <div class="img-show-box" v-if="processed">
              <img
                style="height: 430px"
                :src="currentImage.response.files.file"
              />
            </div>
            <div v-else>
              <div class="uploadBox2">
                <div class="mapImg-box">
                  <img
                    :src="currentImage.response.files.file"
                    class="imgIng"
                  /><img
                    src="../../assets/边框.png"
                    class="background-four-corners"
                  /><img src="../../assets/扫描条.png" class="scanBar" />
                </div>
                <div class="text-box">
                  <div>
                    <p></p>
                    <p>等待问题检查</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="instruction" v-if="processed">
              <p>问题说明</p>
              <div class="problemContain">
                <div
                  class="problem"
                  v-for="item in currentImage.response.result"
                  :key="item"
                >
                  {{ item }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container-right" v-if="mode == 'rcnn'">
          <div class="title-box">
            <span class="title-box-mode">rcnn模式</span>
          </div>
          <div class="title-box">
            <p class="title-box-text" v-if="processed">
               {{ currentImage.name.substring(0,40) }}...
            </p>
            <p class="title-box-text" v-else>正在快速检测中</p>
          </div>
          <div class="img-show-box" v-if="processed">
            <img
              style="height: 430px"
              :src="currentImage.response.files.file"
            />
          </div>
          <div v-else>
            <div class="uploadBox2">
              <div class="mapImg-box">
                <img
                  :src="currentImage.response.files.file"
                  class="imgIng"
                /><img
                  src="../../assets/边框.png"
                  class="background-four-corners"
                /><img src="../../assets/扫描条.png" class="scanBar" />
              </div>
              <div class="text-box">
                <div>
                  <p></p>
                  <p>等待问题检查</p>
                </div>
              </div>
            </div>
          </div>

          <div class="instruction" v-if="processed">
            <p>问题说明</p>
            <div class="problemContain">
              <div
                class="problem"
                v-for="item in currentImage.response.result"
                :key="item"
              >
                {{ item }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { sendImage ,getAlgorithm} from "@/api/process.js";
export default {
  data() {
    return {
      fileList: [
        {
          response: {
            files: { file: "123" },
          },
        },
      ],
      currentImage: {
        response: {
          files: { file: "123" },
        },
      },
      currentImageRcnn: {},
      processed: false,
      mode: "yolo",
    };
  },
  async created() {
    this.fileList =
      typeof this.$route.query.file[0] != "string"
        ? this.$route.query.file
        : [
            {
              response: {
                files: { file: "123" },
              },
            },
          ];
    this.fileListRcnn =
      typeof this.$route.query.file[0] != "string"
        ? this.$route.query.file
        : [
            {
              response: {
                files: { file: "123" },
              },
            },
          ];
    this.mode = this.$route.query.mode;
    this.currentImage = this.fileList[0];
    this.currentImageRcnn = this.fileList[0];
  },

  mounted() {
    // setInterval(()=>{
    //   this.getAlgData()
    // },5000)
    console.log(this.$route.query.file);
    if (typeof this.$route.query.file == "string") {
      this.$router.push({ path: "mapcheck" });
      return;
    }
    if (typeof this.$route.query.file[0] != "string") {
      this.sendImage();
    }
    window.addEventListener("load", () => {
      this.$router.push({ path: "mapcheck" });
      return;
    });
  },
  computed: {},
  methods: {
    async getAlgData(){
      const res = await getAlgorithm()
      console.log(res)
    },
    async sendImage() {
      const sendData = {
        fileList: JSON.stringify(this.fileList),
        mode: this.mode,
      };
      const res = await sendImage(sendData);
      this.fileList = JSON.parse(res.files.file);
      this.currentImage = this.fileList[0];
      this.processed = true;
    },
    async getRcnn() {
      this.mode = "rcnn";
      const sendData = {
        fileList: JSON.stringify(this.fileList),
        mode: "rcnn",
      };
      const res = await sendImage(sendData);
      // this.fileListRcnn = JSON.parse(res.files.file);
      // this.currentImageRcnn = this.fileListRcnn[0];
    },
    getCurrentImage(currentImage) {
      this.currentImage = currentImage;
      this.mode = "yolo";
    },
    toPage() {
      this.$router.push({ path: "mapcheck" });
    },
  },
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
    height: 1520px;
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
      .disabledStyle {
        cursor: not-allowed !important;
      }
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
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    border-radius: 4px;
    width: 730px;
    height: 800px;
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
      .title-box-mode {
        line-height: 40px;
        font-weight: 600;
        color: #333;
        justify-content: center;
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
    .uploadBox2 {
      border: 1px dashed #c0ccda;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 100%;
      height: 430px;
      color: #000;
      background: #fff;
      padding: 10px;
      .mapImg-box {
        width: 340px;
        height: 190px;
        background-size: 100% 100%;
        margin: 0 auto;
        margin-top: 80px;
        position: relative;
        .imgIng {
          width: 340px;
          height: 190px;
          border-radius: 32px;
        }
        .background-four-corners {
          position: absolute;
          top: 0;
          width: 340px;
          height: 190px;
          left: 0;
        }
        .scanBar {
          width: 130%;
          left: -49px;
          position: absolute;
          top: 0;
          -webkit-animation: scanning 5s linear infinite;
          animation: scanning 4s linear infinite;
        }
        @keyframes scanning {
          from {
            top: 0px;
          }
          to {
            top: 192px;
          }
        }
      }
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

