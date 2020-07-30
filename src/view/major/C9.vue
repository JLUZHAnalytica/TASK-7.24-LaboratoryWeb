<template>
    <div class="background">
        <!-- <img class="big_back" src="@/view/img/1.png"> -->
        <img class="big_back" src="@/view/major/img/1.png">
        <div class="icon">
            <el-button type="text" icon="step01" circle @click="centerDialogVisible = true"></el-button>
            <el-button type="text" icon="step02" circle @click="centerChangeVisible = true"></el-button>
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
        <el-button plain class="return">返回</el-button>

        <span class="big_title"><p>任务描述</p></span>
        <span class="big_cont"><p>7、可视化结果分析。</p></span>
        <span class="big_content_10_1"><p>提示：</p></span>
        <span class="big_content_10_2"><p>点击调试可以返回前几步对代码进行调试，重新生成结果。</p></span>
        <span class="big_content_3"><p>点击申购，进行购买。</p></span>
        <el-row>
            <el-button class="up_10" type="primary" @click="dialogVisible = true">买入</el-button>
            <el-dialog
            :visible.sync="dialogVisible"
            width="30%"
            center>
                <div class="content_10_1">
                    <span >将投入100000元申购该投资组合</span>
                </div>
                
                <span slot="footer" class="dialog-footer">
                    <el-button class="sure" type="primary" @click="dialogVisible = false">确定买入</el-button>
                </span>
            </el-dialog>
            <el-button class="down_10" type="primary">调整</el-button>
        </el-row>
        <el-row>
            <img class="data_1" src="@/view/major/img/10-1.png">
            <img class="data_2" src="@/view/major/img/10-2.png">
        </el-row>
        <el-row>
            <img class="data_10_3" src="@/view/major/img/10-3.png">
            <img class="data_4" src="@/view/major/img/10-4.png">
        </el-row>
        <img class="buy" src="@/view/major/img/10.png">

        
        
        
    </div>

</template>
<script>
export default {
    data() {
        return {
        centerDialogVisible: false,
        dialogVisible: false
        };
    },
     methods: {
        open() {
        this.$alert('', {
          dangerouslyUseHTMLString: true,
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
.con{
    height: 415px;
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
*/
.content_10_1{
    text-align: center;
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
span.big_content_10_1{
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
span.big_content_10_2{
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
button.up_10{
    z-index: 1;
    position: absolute;
    bottom: 0; 
    left: 510px;
    width:231px;
    height:50px;
    top:392px;
}
button.down_10{
    z-index: 1;
    position: absolute;
    bottom: 0; 
    left: 750px;
    width:231px;
    height:50px;
    top:392px;
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
.data_10_3{
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
img.buy{
    background-size: 100% 100%;
    z-index: 1;
    position: fixed;
    bottom: 0; 
    left: 268px;
    width: 512px;
    height:55px;
    top: 535px;
}
</style>

