<template>
  <div id="ImgUploads" v-loading="upING" element-loading-text="图片上传中">
    <div
      class="contain"
      v-loading="loading"
      element-loading-text="等待图片上传完成"
      element-loading-spinner="el-icon-loading"
    >
      <div class="contaner-box">
        <div class="contaner-box-left">
          <div class="contaner-box-left-title">
            <div class="title-img-box"></div>
            <h2 class="title1">中国地图纠错</h2>
          </div>

          <div class="contaner-box-left-upload">
            <el-upload
              :before-upload="beforeUpload"
              :on-success="handleImageSuccess"
              drag
              :limit="1"
              :file-list="fileList"
              :show-file-list="true"
              list-type="picture-card"
              action="http://g5.guodata.com:3389/upload"
              :on-change="handleImageChange"
              :on-remove="handleIgameRemove"
              :on-exceed="handleExceed"
            >
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">或将文件拖到此处上传</div>
              <el-button type="primary" class="uploadButton">
                <span style="font-size: 10px">点击上传图片</span>
              </el-button>
              <i class="annotation">支持格式：jpg、png、jpeg、bmp</i>
              <p class="annotation" style="color: rgb(230, 32, 33)">
                <!-- 上传限制：单张图片不超过300KB;图片总数不超过5张 -->
              </p>
              <div class="el-upload__tip" slot="tip"></div>
            </el-upload>
          </div>
          <div class="introduction">
            <p
              style="
                color: #000 !important;
                font-size: 16px !important;
                font-weight: 600;
              "
            >
              使用帮助:
            </p>
            <ul>
              <li>
                <span class="introTitle">YOLO检查模式(默认):</span>
                根据用户上传图片(包括jpg、png、jpeg、bmp格式)，采用人工智能技术，首先选出地图图片，然后再筛选出中国地图图片，最后再判断是否存在重大版图问题，标识并说明错误原因
              </li>
              <li>
                <span class="introTitle">RCNN检査模式:</span>
                在确定上传图片为中国地图的基础上，直接判断是否存在重大版图问题，标识井说明错误原因。
              </li>

              <li>
                该工具为科技工作者撰写技术报告或学术论文插图自检
                <i style="font-weight: 600; color: rgb(51, 51, 51)">提供参考</i>
                。
              </li>
            </ul>
          </div>
        </div>

        <div class="contaner-box-right">
          <div class="title-box">
            <div class="hint">
              <p>已上传{{ fileNum }}张文件，共{{ fileSizeSum }}KB</p>
            </div>
            <div class="upload-button">
              <!-- <el-dropdown @command="gotoPage"> -->
              <el-tooltip content="默认yolo检测模式" placement="top-start">
                <el-button
                  type="primary"
                  size="mini"
                  :disabled="detection"
                  @click="gotoPage"
                  >开始检测</el-button
                ></el-tooltip
              >

              <!-- <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="rcnn">RCNN检测</el-dropdown-item>
                  <el-dropdown-item command="yolo">YOLO检测</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown> -->
            </div>
          </div>
          <div :class="{ defaultImg: fileNum == 0 }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getData } from "@/api/process.js";

export default {
  data() {
    return {
      fileList: [],
      loaded: false,
      loading: false,
      successNum: 0,
      upING: false,
    };
  },
  computed: {
    fileNum() {
      return this.fileList.length;
    },
    fileSizeSum() {
      let sizeSum = 0;
      this.fileList.forEach((item) => {
        sizeSum += item.size / 1024;
      });
      return sizeSum.toFixed(2);
    },
    detection() {
      if (this.fileList == 0) {
        return true;
      } else {
        return false;
      }
    },
  },
  async created() {},
  methods: {
    handleExceed() {
      this.$message({ type: "error", message: "只允许单图上传" });
    },
    async gotoPage() {
      if (this.fileNum == 0) {
        this.$message({
          type: "warning",
          message: "请上传图片",
        });
        return;
      }

      if (this.fileNum == this.successNum) {
        this.$router.push({
          path: "/detectionlist",
          query: { file: this.fileList, mode: "yolo" },
        });
      } else {
        if (this.successNum == 0) {
          this.$message({
            type: "waring",
            message: "无图片上传成功，不能开始检测",
          });
          return;
        }
        // this.$confirm(
        //   `预期上传${this.fileNum}张图片，现已成功上传${this.successNum}张，是否开始检测`,
        //   "提示",
        //   {
        //     confirmButtonText: "检测",
        //     cancelButtonText: "取消",
        //     type: "warning",
        //   }
        // )
        //   .then(() => {
        //     // 确定操作
        //     this.$router.push({
        //       path: "/detectionlist",
        //       query: { file: this.fileList },
        //     });
        //   })
        //   .catch(() => {
        //     // 取消操作
        //     this.$message({
        //       type: "info",
        //       message: "已取消退出",
        //     });
        //   });
      }
      // this.loading = true;
      // setTimeout(() => {
      //   this.loading = false;
      //   this.$router.push({
      //     path: "/detectionlist",
      //     query: { file: this.fileList },
      //   });
      // }, 3000);
    },
    async handleImageSuccess(response, file, fileList) {
      this.upING = true;
      this.successNum += 1;

      setTimeout(() => {
        this.upING = false;
      }, this.fileNum * 1500);
    },
    handleIgameRemove(file, fileList) {
      console.log(1);
      this.fileList = fileList;
    },
    handleImageChange(file, fileList) {
      this.fileList = fileList;
    },
    beforeUpload(file) {
      console.log(file);
      // if (file.size > 307200) {
      //   this.$message({
      //     type: "error",
      //     message: "图片超过300KB，不允许上传",
      //   });
      //   return false;
      // }
    },
  },
};
</script>

<style lang="less" >
#ImgUploads .uploadButton {
  width: 300px;
  height: 52px;
  margin: 30px;
  display: block;
}
#ImgUploads {
  height: 856px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: #f1f1f1;
  padding: 30px;
  .contaner {
    padding: 30px 0 40px 0;
    width: 1200px;
    margin: 0 auto;
    position: relative;
    /deep/ .el-upload-list {
      position: absolute;
      overflow-y: auto;
      overflow-x: hidden;
      margin-top: 35px;
      height: 670px;
      -webkit-transform: translateY(20px);
      transform: translateY(20px);
      left: 480px;
      top: 70px;
    }
  }
}

#ImgUploads .contaner-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
}
#ImgUploads .contaner-box-left {
  width: 440px;
  height: 786px;
  background: #fff;
  padding: 0px 30px;
  margin-right: 30px;
  margin-left: 10px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 4px;
}
#ImgUploads .contaner-box-right {
  width: 730px;
  height: 786px;
  padding: 20px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: #fff;
  border-radius: 4px;
}
#ImgUploads .contaner-box-left-title {
  display: flex;
  align-items: center;
  justify-content: center;
}
#ImgUploads .contaner-box-left .title-img-box {
  width: 40px;
  height: 40px;
  -webkit-transform: translateY(-5px);
  transform: translateY(-5px);
  background: url(../../assets/搜索.f47655fa.png) no-repeat;
  background-size: 100% 100%;
}
#ImgUploads .title1 {
  margin-bottom: 30px;
  font-size: 30px;
  letter-spacing: 1px;
  font-weight: 600;
}
#ImgUploads .contaner-box-right .title-box {
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
#ImgUploads .contaner-box-right .defaultImg {
  width: 360px;
  height: 390px;
  background: url(../../assets/defaultMap.bf61fef7.png);
  margin: 65px auto;
}
#ImgUploads .contaner-box-left-upload {
  height: 340px;
  // display: flex;
  // justify-content: center;
}
#ImgUploads .el-upload--picture-card {
  background-color: #fbfdff;
  border: 0px dashed #c0ccda;
  border-radius: 6px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 148px;
  height: 148px;
  cursor: pointer;
  line-height: 0px;
  vertical-align: top;
}
#ImgUploads .el-upload-list {
  position: absolute;
  overflow-y: auto;
  overflow-x: hidden;
  margin-top: 35px;
  height: 670px;
  -webkit-transform: translateY(20px);
  transform: translateY(20px);
  left: 540px;
  top: 200px;
}
#ImgUploads .el-upload-list--picture-card {
  margin: 0;
  display: inline-block;
  vertical-align: top;
}
#ImgUploads .el-upload-list__item {
  overflow: hidden;
  background-color: #fff;
  border: 1px solid #c0ccda;
  border-radius: 6px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 328px;
  height: 225px;
  margin: 0 8px 8px 0;
  display: inline-block;
}
#ImgUploads .el-upload-dragger {
  width: 380px;
  height: 340px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}
#ImgUploads .annotation {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #999;
  line-height: 20px;
  margin-top: 0px;
  margin-bottom: 15px;
}
.introduction {
  color: #b2b2b2;
}
.introTitle {
  color: #000;
}
</style>

