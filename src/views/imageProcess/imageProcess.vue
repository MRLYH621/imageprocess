<template>
  <div id="ImgUploads">
    <div class="contain">
      <div class="contaner-box">
        <div class="contaner-box-left">
          <div class="contaner-box-left-title">
            <div class="title-img-box"></div>
            <h2 class="title1">图像检测</h2>
          </div>

          <div class="contaner-box-left-upload">
            <el-upload
              :before-upload="beforeUpload"
              :on-success="handleImageSuccess"
              drag
              :limit="5"
              :file-list="fileList"
              :show-file-list="true"
              list-type="picture-card"
              action="https://httpbin.org/post"
              multiple
            >
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">
                将文件拖到此处，或<em>点击上传</em>
              </div>
              <div class="el-upload__tip" slot="tip"></div>
            </el-upload>
          </div>
        </div>

        <div class="contaner-box-right">
          <div class="title-box">
            <div class="hint"><p>已上传0张文件，共0.00KB</p></div>
            <div class="upload-button">
              <button type="button" class="el-button el-button--primary">
                <span>开始检查</span>
              </button>
              <el-button type="primary">开始检测</el-button>
            </div>
          </div>
          <div class="defaultImg"></div>
          <div v-for="item in fileList" :key="item.name">
            <img :src="item.response.files.file" />
            <div>
              <i class="el-icon-delete" @click="rmImage" />
            </div>
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
      fileList: [
        // {
        //   name: "food.jpeg",
        //   url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        // },
        // {
        //   name: "food2.jpeg",
        //   url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        // },
      ],
    };
  },
  methods: {
    async handleImageSuccess(a, b, c) {
      console.log(a);
      console.log(b);
      console.log(c);
      // this.fileList.push(file.files.file);
      // console.log(typeof file.files.file);
      // this.imageShow=true
      // this.$nextTick(() => {
      //   this.fileList.map((e) => {
      //     e.url = e.response.files.file;
      //   });
      // });

      console.log(this.fileList);
    },
    beforeUpload(file) {
      // this.fileList=this.fileList.push(file)

      console.log(this.fileList);
    },
  },
};
</script>

<style lang="less" >
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
  border: 1px dashed #c0ccda;
  border-radius: 6px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 148px;
  height: 148px;
  cursor: pointer;
  line-height: 0px;
  vertical-align: top;
}
</style>

