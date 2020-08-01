<template>
  <div>
    <el-container>
      <el-header style="height: 100px;padding:0px">
        <el-image style="width: 1700px; height: 100px" :src="url1"></el-image>
      </el-header>
      <el-main>
        <div class="main-box" id="main" style="width:1500px">
          <div class="aside" id="left" style="height:750px;width:100px;float:left;">
            <div id="left">
              <ol class="steps">
                <li class="step-active" v-for="i in index+1" :key="i">
                  <div class="step-line"></div>
                  <div class="step-content">
                    <span class="step-num">{{i}}</span>
                  </div>
                </li>
                <li  v-for="i in (9-index)" :key="i+index+1">
                  <div class="step-line"></div>
                  <div class="step-content">
                    <span class="step-num">{{i+index+1}}</span>
                  </div>
                </li>
              </ol>
            </div>
          </div>
          <div class="main" id="right" style="height:800px;width:1200px;float:left;">
            <i>
              <b font-size:40px>风险承受能力评估问卷</b>
            </i>
            <div class="main-main" >
              <div class="question">
                <el-avatar src="https://i.loli.net/2020/07/30/3ciFzRunxrTb1LJ.png"></el-avatar>
                <b>{{index+1+"."}}{{question[index].que}}</b>
              </div>
              <div class="answer">
                <div v-for="(item,i) in question[index].opt" :key="i">
                  <el-radio v-model="radio1" :label="i" border >{{item}}</el-radio>
                </div>
              </div>
            </div>
            <div class="botton">
              <el-button-group>
                <el-button  type="primary" icon="el-icon-arrow-left" @click="sub">上一页</el-button><!-- @click="lastpage" -->
                <el-button  type="primary" @click="add"><!-- @click="nextpage"-->
                  下一页
                  <i class="el-icon-arrow-right el-icon--right"></i>
                </el-button>
                <p @click="getQA(score)">{{score}}</p>
              </el-button-group>
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
.el-header {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  height: 100px;
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
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  top: 20px;
  position: relative;
  font-size: 20px;
}
.question {
  font-size: 30px;
  text-align: left;
  background-color: #ffffff;
  left: 40px;
  top: 40px;
  position: relative;
  width: 1100px;
}
.main-main {
  background-color: #ffffff;
  height: 500px;
}
.answer {
  background-color: #ffffff;
  font-size: 40px;
  top: 100px;
  position: relative;
}
.botton {
  text-align: right;
  background-color: #ffffff;
}
.main {
  background: #d3dce6;
}
.main-box {
  height: 800px;
  width: 2000px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d3dce6;
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
  content: "";
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
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.2);

  width: 3px;
  top: 33px;
  left: 0;
}

ol.steps li.step-active .step-line {
  background-color: #449bf9ff;
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
  background-color: #449bf9ff;
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
        score:0,
        radio1: '1',
        url: 'https://i.loli.net/2020/07/28/JTvZjiX2bwEL7uU.png',
        url1:'https://i.loli.net/2020/07/28/ymPxdFMNkiRtzJY.png',
        index:0,
        optList:[],
        question:[
            {que:"请问您的年龄处于（    ）。",opt:["30岁以下","31-40岁","41-50岁","51-60岁","60岁以上"]},
            {que:"您家庭预计进行证券投资的资金占家庭现有总资产（不含自住、自用房产及汽车等固定资产）的比例是（    ）。",opt:["70%以上","50%-70%","30%-50%","10%-30%","10%以下"]},
            {que:"当您进行投资时，您的首要目标是（    ）。",opt:["资产保值，我不愿意承担任何投资风险","尽可能保证本金安全，不在乎收益率比较低","产生较多的收益， 可以承担一定的投资风险","实现资产大幅增长，愿意承担很大的投资风险"]},
            {que:"进行一项重大投资后，您通常会觉得（    ）。",opt:["很高兴，对自己的决定很有信心","轻松，基本持乐观态度","基本没什么影响","比较担心投资结果","非常担心投资结果"]},
            {que:"假设有两种不同的投资：投资A预期获得5%的收益，有可能承担非常小的损失；投资B预期获得20%的收益，但有可能面临25%甚至更高的亏损。您将您的投资资产分配为（    ）。",opt:["全部投资于A","大部分投资于A","两种投资各一半","大部分投资于B","全部投资于B"]},
            {que:"假如您前期用25元购入一只股票。该股现在升到30元，而根据预测该股近期有一半机会升到35元，另一半机会跌到25元，您现在会（    ）。",opt:["立刻卖出","部分卖出","继续持有","继续买入"]},
            {que:"同上题情况，该股现在已经跌到20元，而您估计该股近期有一半机会升回25元，另一半机会继续下跌到15元，您现在会（    ）。",opt:["立刻卖出","部分卖出","继续持有","继续买入"]},
            {que:"您用于证券投资的资金不会用作其它用途的时间段为（    ）。",opt:["短期：0-1年","中期：1-5年","长期：5年以上"]},
            {que:"您是否了解证券市场的相关知识（    ）。",opt:["从来没有参与过证券交易，对投资知识完全不了解","学习过证券投资知识，但没有实际操作经验，不懂投资技巧","了解证券市场的投资知识，并且有过实际操作经验，懂得一些投资技巧","参与过多年的证券交易，投资知识丰富，具有一定的专业水平"]},
            {que:"您的投资经验可以被概括为（    ）。",opt:["有限：除银行活期账户和定期存款外，我基本没有其他投资经验","一般：除银行活期账户和定期存款外，我购买过基金、保险等理财产品，但还需要进一步的指导","丰富：我是一位有经验的投资者，参与过股票、基金等产品的交易，并倾向于自己做出投资决策","非常丰富：我是一位非常有经验的投资者，参与过权证、期货或创业板等高风险产品的交易"]},
        ]
      }
    },
    methods:{
      add() {
        if(this.index<10){
          this.index+=1
        }
      },
      sub() {
        if(this.index>0){
          this.index-=1
        }
        else{
          this.lastpage()
        }
      },
        lastpage(){
          //点击跳转至上次浏览页面
          this.$router.go(-1)
          //指定跳转地址
          //this.$router.replace('/risk_test2')
        },
        nextpage(){
          //点击跳转至上次浏览页面
         // this.$router.go(-1)
          //指定跳转地址
          this.$router.replace('/risk_test2')
        },
        getQA(score){
                console.log(score);
            }
    }
  }
</script>