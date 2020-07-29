// in&out输入是图片不是输入框;button定义图标
<template>
  <div class="background">
    <!-- <img class="big_back" src="@/view/img/1.png"> -->
    <img class="big_back" src="@/view/major/img/1(0).png" />
    <span class="big_title">
      <p>任务描述</p>
    </span>
    <span class="big_cont">
      <p>1、数据准备</p>
    </span>
    <span class="big_content">
      <p>整理出沪深300、中证500、创业板、标普500、上证国债、上证企业债六类资产的收益数据。</p>
    </span>
    <span class="left_title">
      <p>开发语言：Python</p>
    </span>
    <span class="con_in">
      <p>In:</p>
    </span>
    <span class="con_out">
      <p>Out:</p>
    </span>
    <el-row>
      <el-button class="up" type="primary">上一步</el-button>
      <el-button class="down" type="primary">下一步</el-button>
    </el-row>
    <el-button class="go" type="primary">运行</el-button>
    <el-button plain class="return">返回</el-button>

    <div class="icon">
      <el-button icon="step01" circle></el-button>
      <el-button icon="step02" circle></el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      textarea: "",
    };
  },
};
</script>
<style>
.big_back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-position: center;
  background-size: 100% 100%;
}

.big_title {
  z-index: 1;
  position: absolute;
  bottom: 0;
  left: 88px;
  color: white;
  width: 100px;
  height: 70px;
  top: 67px;
}
.big_cont{
    z-index: 1;
    position: absolute; 
    bottom: 0; 
    left: 10px;
    color: white;
    width:100px;
    height:70px;
    top:110px;
}
.big_content {
  z-index: 1;
  position: absolute;
  bottom: 0;
  text-align: left;
  line-height: 25px;
  left: 45px;
  color: white;
  width: 149px;
  height: 70px;
  top: 150px;
  font-size: 15px;
}
.left_title {
  z-index: 1;
  position: absolute;
  bottom: 0;
  left: 280px;
  color: white;
  width: 150px;
  height: 70px;
  top: 65px;
}
.con_in {
  z-index: 1;
  position: absolute;
  bottom: 0;
  left: 240px;
  color: rgba(0, 119, 255, 0.781);
  width: 150px;
  height: 70px;
  top: 110px;
}
.con_out {
  z-index: 1;
  position: absolute;
  bottom: 0;
  left: 720px;
  color: red;
  width: 150px;
  height: 70px;
  top: 112px;
}
.up{
    z-index: 1;
    position: absolute;
    bottom: 0; 
    left: 755px;
    width:231px;
    height:50px;
    top:475px;
}
.down{
    z-index: 1;
    position: absolute;
    bottom: 0; 
    left: 986px;
    width:231px;
    height:50px;
    top:475px;
}
.go {
  z-index: 1;
  position: absolute;
  bottom: 0;
  left: 1110px;
  width: 125px;
  height: 36px;
  top: 76px;
}
.return {
  z-index: 1;
  position: absolute;
  bottom: 0;
  background-color: white;
  color: rgba(0, 119, 255, 0.781);
  left: 1090px;
  width: 120px;
  height: 33px;
  top: 20px;
}

/* .el-textarea__inner{
    z-index: 1;
    position: absolute;
    bottom: 0; 
    left: 265px;
    width: 40%;
    width: 200px;
    height:70px;
    top: 40px;
} */

.step01 {
  background-size: 100% 100%;
  background-image: url("./img/2.png");
  z-index: 1;
  position: absolute;
  bottom: 0;
  left: 990px;
  width: 28px;
  height: 28px;
  top: 22px;
}
.step02 {
  background-size: 100% 100%;
  background-image: url("./img/3.png");
  z-index: 1;
  position: absolute;
  bottom: 0;
  left: 1040px;
  width: 28px;
  height: 28px;
  top: 22px;
}
</style>

