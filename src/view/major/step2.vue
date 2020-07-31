//代码框弹出框边框
<template>
    <div class="background">
        <img class="big_back" src="@/view/major/img/1.png">
        <!-- <img class="big_back" src="@/view/img/1(0).png"> -->
        <span class="big_title"><p>任务描述</p></span>
        <div class="all_content">
            <span class="big_cont"><p>2、计算标的资产的年化收益率</p></span>
        </div>
        <span class="left_title"><p>开发语言：Python</p></span>
        <span class="con_in"><p>In:</p></span>
        <span class="con_out"><p>Out:</p></span>
        <el-row class="opera">
            <el-button class="up_2" type="primary">上一步</el-button>
            <el-button class="down_2" type="primary">下一步</el-button>
        </el-row>
        <el-button class="go_2" type="primary">运行</el-button>
        <a href="#/nav">
        <el-button plain class="return">返回</el-button>
        </a>
        <el-row :inline="true" style="left: 280px;width: 200px">
            <div class="all_input" >
                <div class="input_1">
                <el-col :span="11">
                    <el-input
                    type="textarea"
                    :rows="21"
                    placeholder=""
                    style="margin-left: 10px"
                    v-model="textarea1">
                    </el-input>
                </el-col>    
                </div>
                 <el-col :span="11">
                <div class="input_2">
                    <el-input
                    type="textarea"
                    :rows="19"
                    placeholder=""
                    style="margin-left: 80px"
                    v-model="textarea2">
                    </el-input>
                </div>
                </el-col>
            </div>
        </el-row>
        <div class="icon">
            <el-button type="text" icon="step01" circle @click="centerDialogVisible = true"></el-button>
            <el-button type="text" icon="step02" circle @click="centerChangeVisible = true"></el-button>
            <!-- <el-dialog :visible.sync="centerDialogVisible" width="60%" center>
                <img class="img_9" src="@/view/img/9.png">
                <div class="con">
                    <span class="big_content_1" style="text-indent:2em;">持续性的研究表明，上级投资风险的最佳方式就是进行分散投资，而不是单独投资于某一资产。在建立投资组合之前，我们首先要做的是确定大类资产的选择范围。宏观层面，需要综合考虑在不同的经济周期环境下每一类资产的历史行为特征、风险-收益关系、以及在当前的宏观经济形式下所预测的未来一段时间的大类资产的走势，个体层面，需要综合考虑每个大类资产的收益能力，波动率，与其他资产间的相关性，抗通胀属性手续费等特性，再通过宏观与个体层面的结合，确定最后的大类资产选择范围。</span>
                    <span class="big_content_2" style="text-indent:2em;">资产大类大致可以分为:权益类，债券类和货币类等，对于每一大类资产结合，我国实行又可以细分很多小类，小类数量不在于多，在于彼此间能够有效的分散掉非系统性风险，使efficient frontier最优，系统选取出来七类资产作为研究对象，分别为：国内股市(大盘股，中盘股，小盘股)，国外股市(美股)，国内债券，(国债，企业债)，货币基金。由于是被动投资，考虑历史数据长短问题，上述七类资产分别以沪深300，中证500，创业板，标普500，上证国债，上证企业债为代表。</span>
                    <img class="img_7" src="@/view/img/7-1.png">
                </div>
            </el-dialog> -->
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
        </div>
    </div>

</template>


<script scoped>
export default {
    data() {
        return {
            textarea1: '',
            textarea2: '',
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
    left: 88px;
    color: white;
    width:100px;
    height:70px;
    top:67px;
}
.all_content{
    z-index: 1;
    position: absolute; 
    bottom: 0; 
    text-align: left;
    left: 5px;
    color: white;
    top: 10px;
    font-size: 15px;
}
.big_content{
    z-index: 1;
    position: absolute; 
    bottom: 0; 
    text-align: left;
    line-height: 25px;
    left: 45px;
    color:white;
    width:170px;
    height:70px;
    top:150px;
    font-size: 15px;
}
.con{
    height: 355px;
}
span.big_cont{
    z-index: 1;
    position: absolute; 
    line-height: 22px;
    left: 45px;
    color:white;
    width: 710px;
    height:70px;
    top: 110px;
    font-size: 15px;
}
span.big_content_1{
    z-index: 1;
    position: absolute; 
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
    position: absolute; 
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

.left_title{
    z-index: 1;
    position: absolute; 
    bottom: 0; 
    left: 280px;
    color: white;
    width:150px;
    height:70px;
    top:65px;
}
.con_in{
    z-index: 1;
    position: absolute; 
    bottom: 0; 
    left: 260px;
    color: white;
    width:150px;
    height:70px;
    top:100px;
}
.con_out{
    z-index: 1;
    position: absolute; 
    bottom: 0; 
    left: 730px;
    color: white;
    width:150px;
    height:70px;
    top: 100px;
}
/* .opera{
    z-index: 1;
    position: absolute;
    bottom: 0; 
    left: 700px;
    width:231px;
    height:50px;
    top: 27px;
} */
button.up_2{
    z-index: 1;
    position: absolute;
    bottom: 0; 
    left: 600px;
    width:231px;
    height:50px;
    top:420px;
}
button.down_2{
    z-index: 1;
    position: absolute;
    bottom: 0; 
    left: 830px;
    width:231px;
    height:50px;
    top: 420px;
}
button.go_2{
    z-index: 1;
    position: absolute;
    bottom: 0; 
    left: 1110px;
    width:120px;
    height:30px;
    top: 78px;
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
/* .el-textarea1{
    left: 260px;
}
.el-textarea2{
    left: 740px;
} */
.el-row{
    left: 170px;
    width: 1012px;
    top: 55px;
}
.all_input{
    width: 900px !important;
}
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