<template>
  <div class="nav">
    <div class="nav_box">
      <div class="logo_box">
        <a href="">
          <!-- <img src="../assets/logo.png" alt="" class="logo" /> -->
            <!-- <img src="../assets/logo1.jpg" alt="" class="logo" /> -->
        </a>
      </div>
      <div class="nav_right">
        <div class="log_reg">
          <span><a id="login" style="color: white">登录</a></span>
          <span><a id="register" style="color: white">注册</a></span>
        </div>
        <ul class="nav_list">
          <!-- <li class="nav_li" menuorder="1">
            <a class="nav_a" href="/">首页</a>
          </li>
          <li class="nav_li" menuorder="2"><a class="nav_a">目录服务</a></li>
          <li class="nav_li" menuorder="3"><a class="nav_a">数据下载</a></li>
          <li class="nav_li" menuorder="4"><a class="nav_a">地图服务</a></li> -->
          <li class="nav_li" menuorder="5">
            <a class="nav_a" id="current_page">知识服务</a>
          </li>
          <!-- <li class="nav_li" menuorder="6"><a class="nav_a">专家院士</a></li>
          <li class="nav_li" menuorder="7"><a class="nav_a">专用工具</a></li> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav {
  background-image: url(../assets/nav_bg.png);
  height: 94px;
}
.nav_box {
  width: 1200px;
  height: 94px;
  margin: 0 auto;
  vertical-align: bottom;
}
.logo_box {
  height: 94px;
  float: left;
}
.logo {
  float: left;
  cursor: pointer;
  margin-top: 24px;
  border: none;
  width: 94%;
  width: 290px;
}
.nav_right {
  height: 94px;
  float: right;
}
.log_reg {
  margin-top: 15px;
  float: right;
  font-size: 14px;
  font-family: "microsoft yahei";
  color: #333333;
}
.nav_list {
    line-height: 30px;
    margin-top: 50px;
}
.nav_list li {
    list-style: none;
    float: left;
    font-size: 16px;
    color: white;
    margin-left: 22px;
    position: relative;
    list-style: none;
}
.nav_list li>a {
    text-decoration: none;
    color: white;
        font-size: 14px;
}
</style>