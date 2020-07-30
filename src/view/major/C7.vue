//button定义图标;弹框图片
<template>
    <div class="background">
        <!-- <img class="big_back" src="@/view/img/1.png"> -->
        <img class="big_back" src="@/view/major/img/7.png">
        <span class="big_title"><p>任务说明</p></span>
        <span class="big_content_7"><p>根据我国资本市场实际情况，本实验项目设定可选取的资产大类有六类：国内股市(大盘股，中盘股，小盘股)，国外股市(美股)，国内债券，(国债，企业债)，货币基金。由于是被动投资，考虑历史数据长短问题，上述资产分别以沪深300，中证500创业板标普500，上证国债，上证企业债为代表。</p></span>
        <el-button plain class="return">返回</el-button>
        <div class="icon">
            <el-button type="text" icon="step01" circle @click="centerDialogVisible = true"></el-button>
            <el-dialog
            title="资产大类的选取"
            :visible.sync="centerDialogVisible"
            width="60%"
            center>
                <div class="con">
                        <span class="big_content_1" style="text-indent:2em;">持续性的研究表明，上级投资风险的最佳方式就是进行分散投资，而不是单独投资于某一资产。在建立投资组合之前，我们首先要做的是确定大类资产的选择范围。宏观层面，需要综合考虑在不同的经济周期环境下每一类资产的历史行为特征、风险-收益关系、以及在当前的宏观经济形式下所预测的未来一段时间的大类资产的走势，个体层面，需要综合考虑每个大类资产的收益能力，波动率，与其他资产间的相关性，抗通胀属性手续费等特性，再通过宏观与个体层面的结合，确定最后的大类资产选择范围。</span>
                        <span class="big_content_2" style="text-indent:2em;">资产大类大致可以分为:权益类，债券类和货币类等，对于每一大类资产结合，我国实行又可以细分很多小类，小类数量不在于多，在于彼此间能够有效的分散掉非系统性风险，使efficient frontier最优，系统选取出来七类资产作为研究对象，分别为：国内股市(大盘股，中盘股，小盘股)，国外股市(美股)，国内债券，(国债，企业债)，货币基金。由于是被动投资，考虑历史数据长短问题，上述七类资产分别以沪深300，中证500，创业板，标普500，上证国债，上证企业债为代表。</span>
                        <img class="img_7" src="@/view/major/img/7-1.png">
                </div>
            </el-dialog>
            <el-button type="text" icon="step02" circle @click="centerChangeVisible = true"></el-button>
        </div>
        <img class="form" src="@/view/major/img/7-1.png">
        <a href="#/major8">
            <el-button class="go" type="primary">开始分析</el-button>
        </a>
    </div>

</template>

<script>
export default {
    data() {
        return {
        centerDialogVisible: false
        }
    },
     methods: {
        open() {
        this.$alert('', {
          dangerouslyUseHTMLString: true
        });
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
    left: 50px;
    color: white;
    width:100px;
    height:70px;
    top:74px;
}
.con{
    height: 355px;
}
span.big_content_1{
    z-index: 1;
    /* position: absolute;  */
    line-height: 22px;
    left: 30px;
    color:black;
    width: 710px;
    height:70px;
    top: 50px;
    font-size: 13px;
}
span.big_content_2{
    z-index: 1;
    /* position: absolute;  */
    line-height: 22px;
    left: 30px;
    color:black;
    width: 710px;
    height: 140px;
    top: 160px;
    font-size: 13px;
}
img.img_7{
    background-size: 100% 100%;
    z-index: 1;
    position: fixed;
    bottom: 0; 
    left: 285px;
    width: 710px;
    height: 220px;
    top: 340px;
}
/* img.img_9{
    width: 750px;
    height: 300px;
    background-position: center center;
}
.el-dialog__body{
    height: 300px;
} */

.big_content_7{
    z-index: 1;
    position: absolute; 
    bottom: 0; 
    text-align: left;
    line-height: 25px;
    left: 67px;
    color: black;
    width:1130px;
    height:70px;
    top:130px;
    font-size: 15px;
}
button.go{
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

