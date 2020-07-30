
// in&out输入是图片不是输入框;button定义图标
<template>
    <div class="background">
        <!-- <img class="big_back" src="@/view/img/1.png"> -->
        <img class="big_back" src="@/view/major/img/7.png">
        <span class="big_title" style="z-index: 1;
    position: absolute; 
    bottom: 0; 
    left: 50px;
    color: white;
    width:100px;
    height:70px;
    top:74px; "><p>任务说明</p></span>
        <span class="big_content" style="z-index: 1;
    position: absolute; 
    bottom: 0; 
    text-align: left;
    line-height: 25px;
    left: 67px;
    color: black;
    width:1200px;
    height:70px;
    top:130px;
    font-size: 15px;">根据我国资本市场实际情况，本实验项目设定可选取的资产大类有六类：国内股市(大盘股，中盘股，小盘股)，国外股市(美股)，国内债券，(国债，企业债)，货币基金。由于是被动投资，考虑历史数据长短问题，上述资产分别以沪深300，中证500创业板标普500，上证国债，上证企业债为代表。</span>
        <el-button plain class="return">返回</el-button>
        <div class="icon">
            <el-button icon="step01" circle></el-button>
            <el-button icon="step02" circle></el-button>
        </div>
        <img class="form" src="@/view/major/img/7-1.png">
        <el-button class="go" type="primary">开始分析</el-button>
    </div>

</template>

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

/* .big_title{
    z-index: 1;
    position: absolute; 
    bottom: 0; 
    left: 50px;
    color: white;
    width:100px;
    height:70px;
    top:74px;
}
.big_content{
    z-index: 1;
    position: absolute; 
    bottom: 0; 
    text-align: left;
    line-height: 25px;
    left: 67px;
    color: black;
    width:1200px;
    height:70px;
    top:130px;
    font-size: 15px;
} */
.go{
    z-index: 1;
    position: absolute;
    bottom: 0; 
    left: 1100px;
    width:125px;
    height:36px;
    top: 530px;
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
.form{
    width: 780px;
    left: 60px;
    z-index: 1;
    position: absolute; 
    bottom: 0; 
    color: black;
    height:290px;
    top:210px;

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
</style>

