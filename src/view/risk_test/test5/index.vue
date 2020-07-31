<template>
    <div >
        <el-container>
            <el-header style="height: 100px;padding:0px">
                <el-image style="width: 1700px; height: 100px" :src="url1"  ></el-image>
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
                                    <div class="main-main" >
                                        <div class="question" >
                                            <el-avatar src="https://i.loli.net/2020/07/30/3ciFzRunxrTb1LJ.png"></el-avatar>
                                            <b>5.假设有两种不同的投资：投资A预期获得5%的收益，有可能承担非常小的损失；投资B预期获得20%的收益，但有可能面临25%甚至更高的亏损。您将您的投资资产分配为（    ）。</b>
                                        </div>
                                        <div class="answer" >
                                            <div>
                                                <el-radio v-model="radio1" label="1"  border>A.全部投资于A</el-radio>
                                                <el-radio v-model="radio1" label="2"  border>B.大部分投资于A</el-radio>
                                            </div>
                                            <div>
                                                <el-radio v-model="radio1" label="3" border>C.两种投资各一半</el-radio>
                                                <el-radio v-model="radio1" label="4" border>D.大部分投资于B</el-radio>
                                            </div>
                                            <div>
                                                <el-radio v-model="radio1" label="5" border>E.全部投资于B</el-radio>
                                            </div>
                                        </div>
                                    </div>  
                                    <div class="botton">
                                        <el-button-group>
                                            <el-button @click="lastpage" type="primary" icon="el-icon-arrow-left">上一页</el-button>
                                            <el-button @click="nextpage" type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
                                        </el-button-group> 
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
        left: 40px;
        top: 40px;
        position: relative;
        width:1100px;
    }
    .main-main{
        background-color: #ffffff;
        height:500px;
        
    }
    .answer{
        background-color: #ffffff;
        font-size: 40px;
        top: 30px;
        position: relative;
    }
    .botton{
        text-align:right;
        background-color: #ffffff;
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
        radio1: '1',
        radio2: '1',
        radio3: '1',
        radio4: '1',
        radio5: '1',
        url: 'https://i.loli.net/2020/07/28/JTvZjiX2bwEL7uU.png',
        url1:'https://i.loli.net/2020/07/28/ymPxdFMNkiRtzJY.png',
        } 
    },
    methods:{
        lastpage(){
 
          //点击跳转至上次浏览页面
          //this.$router.go(-1)
 
          //指定跳转地址
          this.$router.replace('/risk_test4')
        },
        nextpage(){
 
          //点击跳转至上次浏览页面
         // this.$router.go(-1)
 
          //指定跳转地址
          this.$router.replace('/risk_test6')
        }
    }
  }
</script>