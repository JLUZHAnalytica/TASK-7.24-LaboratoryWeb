<template>
    <div >
        <el-container>
            <el-header style="height: 100px;padding:0px">
                <el-image style="width: 1700px; height: 100px" :src="url1" :fit="fit" ></el-image>
            </el-header>
            <el-main>
                <div class="main-box" id="main" style="width:1500px">
                                <div class="aside"  id="left" style="height:750px;width:100px;float:left;">
                                   <div id="left">
                                        <ol class="steps">
                                            <li class="step-active">
                                                <div class="step-line"></div>
                                                <div class="step-content">
                                                    <span class="step-num">1</span>

                                                </div>
                                            </li>
                                            <li class="step-active">
                                                <div class="step-line"></div>
                                                <div class="step-content">
                                                    <span class="step-num">2</span>

                                                </div>
                                            </li>
                                            <li class="step-active">
                                                <div class="step-line"></div>
                                                <div class="step-content">
                                                    <span class="step-num">3</span>

                                                </div>
                                            </li>
                                            <li class="step-active">
                                                <div class="step-line"></div>
                                                <div class="step-content">
                                                    <span class="step-num">4</span>

                                                </div>
                                            </li>
                                            <li class="step-active">
                                                <div class="step-line"></div>
                                                <div class="step-content">
                                                    <span class="step-num">5</span>

                                                </div>
                                            </li>
                                            <li class="step-active">
                                                <div class="step-line"></div>
                                                <div class="step-content">
                                                    <span class="step-num">6</span>

                                                </div>
                                            </li>
                                            <li>
                                                <div class="step-line"></div>
                                                <div class="step-content">
                                                    <span class="step-num">7</span>

                                                </div>
                                            </li>
                                            <li>
                                                <div class="step-line"></div>
                                                <div class="step-content">
                                                    <span class="step-num">8</span>

                                                </div>
                                            </li>
                                            <li>
                                                <div class="step-line"></div>
                                                <div class="step-content">
                                                    <span class="step-num">9</span>

                                                </div>
                                            </li>
                                            <li class="step-end">
                                                <div class="step-line"></div>
                                                <div class="step-content">
                                                    <span class="step-num">10</span>

                                                </div>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                                <div class="main" id="right" style="height:800px;width:1200px;float:left;">    
                                    <i><b font-size:40px>风险承受能力评估问卷</b></i>
                                    <div class="result" id="main">
                                        <div class="result-word" id="left" style="height:400px;width:1500;float:left;">
                                            <div class="main-main" >
                                                <div class="question">
                                                    <el-avatar src="https://i.loli.net/2020/07/30/3ciFzRunxrTb1LJ.png"></el-avatar>
                                                    <b>您的风险承受能力评级属于</b>
                                                </div>
                                                <div class="answer" >
                                                    <p>此类投资者对于投资产品的任何下跌都不愿意接受，甚至不能承受极小的资产波动。属于风险厌恶型的投资者， 首要目的是保持投资的稳定性与资产的保值，这类投资者需要注意为达到上述目标回报率可能很低，以换取本金免于受损和较高的流动性。</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="result-picture" id="right" style="height:500px;width:400px;float:left;">
                                            <div class="picture">
                                                <el-image style="width: 400px; height: 200px" :src="url2" :fit="fit" ></el-image>
                                            </div>
                                            <div class="botton">
                                            <el-button-group>
                                                <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
                                                <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
                                            </el-button-group> 
                                        </div>
                                        </div> 
                                        
                                    </div>
                                </div>
                </div>
            </el-main> 
        </el-container>
    </div>
</template>

<style scoped>
    .el-header{
        background-color: #ffffff;
        color: #333;
        text-align: center;
        height:100px;
        line-height: 100px;
        font-size: 30px;
        font-family: "Helvetica Neue";
        padding: 0px;
    }
    .el-main {
        background-color: #ffffff;
        color: #333;
        text-align: center;
        line-height: 80px;
        font-size: 40px;
        left: 170px;
        position: relative;
        }
    .aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        top: 20px;
        position: relative;
        font-size: 20px;
    }
    .question{
        font-size: 30px;
        text-align:left;
        background-color: #ffffff;
        left: 80px;
        top: 60px;
        position: relative;
    }
    .main-main{
        background-color: #ffffff;
        height:500px;
        width:700px;
        
    }
    .result-picture{
        background-color: #ffffff;
    }
    .answer{
        background-color: #ffffff;
        font-size: 15px;
        top: 100px;
        position: relative;
        width: 500px;
        left:100px;
        line-height: 1.3;
    }
    .picture{
        top: 60px;
        position: relative;
    }
    .botton{
        text-align:right;
        background-color: #ffffff;
        top: 190px;
        position: relative;
    }
    .main{
        background: #D3DCE6
    }
    .main-box{
        height: 800px;
        width:2000px;
        display:flex;
        justify-content:center;
        align-items:center;
        background-color:#D3DCE6
    }
    
    ol.steps::-webkit-scrollbar {
            /* chrome 隐藏滚动条*/
            display: none;
        }

        ol.steps {
            list-style: none;
           
        }

        ol.steps:after,
        ol.steps li:after {
            content: '';
            display: block;
            clear: both;
        }

        ol.steps li {
          
            width: 49px;
            height: 50px;
            position: relative;
            
        }

        ol.steps li .step-line {
            height: 40px;
            position: absolute;
            background-color: #e0e0e0;
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, .2); 
            width: 3px;
            top: 33px;
            left: 0;
        }

        ol.steps li.step-active .step-line {
            background-color: #449BF9FF;
            box-shadow: inset 0 1px 1px#449BF9FF;
        }

        ol.steps .step-content {
            position: absolute;
            top: 0;
            left: -15px;
            text-align: center;
        }

        ol.steps li .step-content .step-num {
            display: inline-block;
            height: 30px;
            width: 30px;
            color: #fff;
            background-color: #b9b9b9;
            line-height: 30px;
            border-radius: 50%;
            text-align: center;
            border: 1px solid rgba(224, 224, 224, 1);
        }

        ol.steps li.step-active .step-content .step-num {
            background-color: #449BF9FF;
        }

        ol.steps li.step-end {
            width: 120px !important;
            flex: inherit;
        }

        ol.steps li.step-end .step-line {
            display: none;
        }


</style>

<script>
  export default {
    data () {
      return {
        url: 'https://i.loli.net/2020/07/28/JTvZjiX2bwEL7uU.png',
        url1:'https://i.loli.net/2020/07/28/ymPxdFMNkiRtzJY.png',
        url2:'https://i.loli.net/2020/07/30/MPstTz6AHXWaNG4.png'
        } 
    }
  }
</script>