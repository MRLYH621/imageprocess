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
              class="upload-demo"
              drag
              :limit="5"
              :show-file-list="false"
              action="https://jsonplaceholder.typicode.com/posts/"
              multiple
            >
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">
                将文件拖到此处，或<em>点击上传</em>
              </div>
              <div class="el-upload__tip" slot="tip">
               
              </div>
            </el-upload>
          </div>
        </div>

        <div class="contaner-box-right">
          <div class="title-box">
            <div class="hint"><p>已上传0张文件，共0.00KB</p></div>
            <div class="upload-button">
              <!-- <button type="button" class="el-button el-button--primary">
               <span>开始检查</span>
              </button> -->
              <el-button type="primary">开始检测</el-button>
            </div>
          </div>
          <div class="defaultImg"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style  scoped>
#ImgUploads {
  height: 856px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: #f1f1f1;
  padding: 30px;
}
#ImgUploads .contaner {
  padding: 30px 0 40px 0;
  width: 1200px;
  margin: 0 auto;
  position: relative;
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
    display: flex;
    justify-content: center;
}
</style>>

