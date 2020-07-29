<template>
    <div class="background">
        <!-- <img class="big_back" src="@/view/img/1.png"> -->
        <img class="big_back" src="@/view/major/img/1.png">
        <div class="icon">
            <el-button icon="step01" circle></el-button>
            <el-button icon="step02" circle></el-button>
        </div>
        <el-button plain class="return">返回</el-button>
        <span class="big_title"><p>任务描述</p></span>
        <span class="big_cont"><p>7、可视化结果分析。</p></span>
        <span class="big_content_1"><p>提示：</p></span>
        <span class="big_content_2"><p>点击调试可以返回前几步对代码进行调试，重新生成结果。</p></span>
        <span class="big_content_3"><p>点击申购，进行购买。</p></span>
        <el-row>
            <el-button class="up" type="primary">买入</el-button>
            <el-button class="down" type="primary">调整</el-button>
        </el-row>
        <el-row>
            <img class="data_1" src="@/view/major/img/10-1.png">
            <img class="data_2" src="@/view/major/img/10-2.png">
        </el-row>
        <el-row>
            <img class="data_3" src="@/view/major/img/10-3.png">
            <img class="data_4" src="@/view/major/img/10-4.png">
        </el-row>
        <img class="buy" src="@/view/major/img/10.png">

        
        
        
    </div>

</template>
<script>
export default {
  data() {
    return {
      state1: '',
      state2: '',
      state3: '',
      state4: '',
      input: ''

    }
  }
}
</script>

<style>

.big_back{
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-position: center;
    background-size: 100% 100%;
}

.big_title{
    z-index: 1;
    position: absolute; 
    bottom: 0; 
    left: 88px;
    color: white;
    width:100px;
    height:70px;
    top:67px;
}
.big_cont{
    z-index: 1;
    position: absolute; 
    bottom: 0; 
    left: 40px;
    color: white;
    width:160px;
    height:70px;
    top:110px;
}
.big_content_1{
    z-index: 1;
    position: absolute; 
    bottom: 0; 
    text-align: left;
    line-height: 25px;
    left: 45px;
    color: white;
    width:149px;
    height:70px;
    top:150px;
    font-size: 15px;
}
.big_content_2{
    z-index: 1;
    position: absolute; 
    bottom: 0; 
    text-align: left;
    line-height: 25px;
    left: 45px;
    color: white;
    width:160px;
    height:70px;
    top:180px;
    font-size: 15px;
}
.big_content_3{
    z-index: 1;
    position: absolute; 
    bottom: 0; 
    text-align: left;
    line-height: 25px;
    left: 45px;
    color: white;
    width:160px;
    height:70px;
    top:257px;
    font-size: 15px;
}
.up{
    z-index: 1;
    position: absolute;
    bottom: 0; 
    left: 755px;
    width:231px;
    height:50px;
    top:447px;
}
.down{
    z-index: 1;
    position: absolute;
    bottom: 0; 
    left: 986px;
    width:231px;
    height:50px;
    top:447px;
}
.go{
    z-index: 1;
    position: absolute;
    bottom: 0; 
    left: 1110px;
    width:125px;
    height:36px;
    top: 76px;
}
.return{
    z-index: 1;
    position: absolute;
    bottom: 0; 
    background-color: white;
    color:rgba(0, 119, 255, 0.781);
    left: 1090px;
    width:120px;
    height:33px;
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

.step01{
    background-size: 100% 100%;
    background-image: url("./img/2.png");
    z-index: 1;
    position: absolute;
    bottom: 0; 
    left: 990px;
    width: 28px;
    height:28px;
    top: 22px;
}
.step02{
    background-size: 100% 100%;
    background-image: url("./img/3.png");
    z-index: 1;
    position: absolute;
    bottom: 0; 
    left: 1040px;
    width: 28px;
    height:28px;
    top: 22px;
}
.data_1{
    background-size: 100% 100%;
    z-index: 1;
    position: fixed;
    bottom: 0; 
    left: 265px;
    width: 490px;
    height:220px;
    top: 80px;
}
.data_2{
    background-size: 100% 100%;
    z-index: 1;
    position: fixed;
    bottom: 0; 
    left: 765px;
    width: 490px;
    height:220px;
    top: 80px;
}
.data_3{
    background-size: 100% 100%;
    z-index: 1;
    position: fixed;
    bottom: 0; 
    left: 265px;
    width: 490px;
    height:225px;
    top: 310px;
}
.data_4{
    background-size: 100% 100%;
    z-index: 1;
    position: fixed;
    bottom: 0; 
    left: 765px;
    width: 490px;
    height:225px;
    top: 310px;
}
.buy{
    background-size: 100% 100%;
    z-index: 1;
    position: fixed;
    bottom: 0; 
    left: 270px;
    width: 495px;
    height:55px;
    top: 535px;
}
</style>

