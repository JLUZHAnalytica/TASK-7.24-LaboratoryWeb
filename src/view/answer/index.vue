<template>
  <div  style="height: 100%; width: 100%;" class="note" :style ="note">
    <div class="header">   <!-- 头部-->
    <!-- <div class="header_bg"><img src="img/headers.jpg" alt="" ></div> -->
    <div class="learn">
       <router-link to="/learn" style="width: 250px;position: absolute;right: 575px;top: 88px;">
             <img src="img/btn-study-select.png" >
       </router-link>
    </div>
    <div class="answer" style="width: 250px;position: absolute;right: 710px;top: 106px;">
      <router-link to="/answer">
        <img src="img/btn-answer-nor.png" >
      </router-link>
    </div>
    <div class="return_main" style="text-decoration:none;width: 143px;background: #fff;border-radius: 8px;position: absolute;right: 51px;top: 38px;height: 34px;font-size: 16px;">
      <router-link to="/nav" style="text-decoration: none;">
      <p class="return_text" style="    color: #6D67EF;text-decoration: none;margin-block-start: 0.4em;">
        返回
      </p>
      </router-link>
    </div>
    </div>  
    <!-- 快问快答 -->
    <div class="answer_question_box" >
        <div class="bg_box" :style ="bg_box"> </div>
        <!--题目部分-->
        <div class="exam-box"  >
            <div class="index">{{ questionIndex + 1 }}/15</div>
            <!--<h2 class="type">{{ type }}</h2>-->
            <div class="question_title" >{{ '【'+type+'】'+question.content }}</div>
            <!-- <div>分数：{{ score }}</div> -->
            <ul class="options">
                <li class="item" v-for="(option, index) in question.options"
                    :key="option"
                    :class="{selected: isSelected(question, index)}"
                    @click="doOption(index)" >{{ option }}
                    <img class="Aimg"  v-if="index === 0"    src="img/icon_eaxm_nor.png.png" alt="未选中">
                    <img class="Bimg"  v-if="index === 1" src="img/icon_eaxm_nor.png.png" alt="未选中">
                    <img class="Cimg"  v-if="index === 2" src="img/icon_eaxm_nor.png.png" alt="未选中">
                    <img class="Dimg"  v-if="index === 3" src="img/icon_eaxm_nor.pngr.png" alt="未选中">
                    <img class="Aimg"  v-if="index  === 0 && isSelected(question, index)"    src="img/icon_eaxm_select.png" alt="选中">
                    <img class="Bimg"  v-if="index  === 1 && isSelected(question, index)"    src="img/icon_eaxm_select.png" alt="选中">
                    <img class="Cimg"  v-if="index === 2 && isSelected(question, index)"    src="img/icon_eaxm_select.png" alt="选中">
                    <img class="Dimg"  v-if="index === 3 && isSelected(question, index)"    src="img/icon_eaxm_select.png" alt="选中">
                </li>
    
            </ul>
            <div class="op">
                <!-- <button class="btn" label="上一题" @click="prevQuestion" :disabled="questionIndex === 0" /> -->
                <!-- <el-button class="btn" label="下一题" primary @click="nextQuestion" :disabled="questionIndex === questions.length - 1" >下一题 </el-button> -->
                <el-button type="primary" class="btn" label="确定" @click="viewAnswer" :disabled="false" v-if="state === ''  || state === 'start'">确定</el-button>
            </div>
            <div class="answer_card" v-if="state === 'end'">
            <ul class="answer-list">
                <li class="item">
                <div :class="{success: isSuccess(question), error: !isSuccess(question)}">
                    <div class="wrong" v-if="!isSuccess(question)">
                        <img class="icon_wt" src="img/icon-wrong.png" alt="">
                           <p class="text_wt">回答错误，正确答案为：</p>
                        <div class="right_answer">
                             <li v-for="answer in question.answer" :key="answer">
                             {{ numberToLetter(answer) }} 
                            </li>!
                        </div>
                    </div>
                    <div class="right" v-if="isSuccess(question)">
                        <img class="icon_wt" src="img/icon-ture.png" alt="">
                         <p class="text_wt">回答正确啦 !</p>
                    </div>
                    <el-button type="primary" class="btn" label="下一题" primary @click="restart" v-if="questionIndex < questions.length - 1"> 下一题</el-button>
                    <h3 v-if="questionIndex === questions.length - 1">已完成最后一题：你的得分是：{{ score }}</h3>
                </div>
                </li>
            </ul>
        </div>
        </div>


     </div>
    
    
  </div>
</template>
<style>
.note{
  position: absolute;
  top: 0px;
  left: 0px;
}
.learn{
    width: 250px;
    position: absolute;
    right: 480px;
    top: 19px;
}
.answer{
    width: 250px;
    position: absolute;
    right: 280px;
    top: 19px;
}
.answer_question_box{
    height: 642px;
    width: 93%;
    position: absolute;
    top: 239px;
    left: 69px;
    margin: auto;
    border-radius: 8px;
    opacity: 1;
    background: #F0EFF6;
}
.bg_box{
    height: 636px;
    width: 100%;
    position: absolute;
    top: 5px;
    left: -2px;
    margin: auto;
    border-radius: 8px;
    opacity: 1;
}
.exam-box{
    position: absolute;
    position: absolute;
    width: 100%;
    height: 100%;
}
.Aimg{
    position: absolute;
    left: 678px;
    top: 162px;
}
.Bimg{
    position: absolute;
    left: 678px;
    top: 218px;
}
.Cimg{
    position: absolute;
    left: 678px;
    top: 276px;
}
.Dimg{
    position: absolute;
    left: 678px;
    top: 333px;
}
ul{
    margin-top: 156px;
}
.item{
    list-style: none;
    margin: 26px;
    font-size: 1.5em;
    width: 355px;
    text-align: left;
    padding-left: 659px;
}
.right_answer{
    position: absolute;
    left: 996px;
    width: 80px;
    top: 4999px;
}
.right_answer li{
    float: left;
}
.icon_wt{
    position: absolute;
    left: 643px;
    top: 479px;
}
.text_wt{
    position: absolute;
    top: 470px;
}
.question_title{
    width: 100%;
    font-size: 29px;
    font-weight: bold;
    padding-bottom: 56px;
    position: absolute;
    top: 38px;
}
.li img{
    position: absolute;
    left: 141px;
    top: 179px;
}
.index{
    width: 49px;
    height: 19px;
    right: 126px;
    position: absolute;
    top: 86px;
    font-size: 1.5em;
    font-weight: bold;
}
.el-button--primary {
    color: #FFF;
    background-color: #409EFF;
    border-color: #409EFF;
    width: 157px;
    position: absolute;
    right: 107px;
    top: 539px;
}

</style>
<script>

export default {
    data(){
      return{
        questionIndex: 0,
        questions: [
                    {
                        id: '1',
                        type: 'multiple',
                        content: '1.系统性风险包括',
                        options: ['A.人事变动风险', 'B.经济周期波动风险',' C.利率风险','D.购买力风险'],
                        answer: [1, 2,3],
                        userAnswer: null
                    },
                    {
                        id: '1',
                        type: 'multiple',
                        content: '2.非系统性风险包括',
                        options: ['A.信用风险', 'B.经营风险','C.财务风险','D.道德风险'],
                        answer: [0,1,2,3],
                        userAnswer: null
                    },
                    {
                        id: '1',
                        type: 'multiple',
                        content: '3.影响用户风险偏好的因素有',
                        options: ['A.家庭结构', 'B.收入情况','C.可投资资产状况','D.对投资年限的认知'],
                        answer: [0,1,2,3],
                        userAnswer: null
                    },
                    {
                        id: '1',
                        type: 'multiple',
                        content: '4.确定大类资产的选择范围需要考虑以下哪些因素',
                        options: ['A.大类资产未来一段时间的走势', 'B.大类资产的手续费','C.大类资产的收益及波动率','D.大类资产之间的相关性'],
                        answer: [0,1,2,3],
                        userAnswer: null
                    },
                    {
                        id: '1',
                        type: 'multiple',
                        content: '5.以下资产具有增值性，能产生高额回报的是',
                        options: ['A.大盘股 ', 'B.中盘股','C.美股','D.货币基金'],
                        answer: [0,1,2],
                        userAnswer: null
                    },
                    {
                        id: '1',
                        type: 'single',
                        content: '1.一般地，投资者风险偏好值越大，表明其对于风险的承受能力更强，在投资时可能更加激进',
                        options: ['A.正确', 'B.错误'],
                        answer: [0],
                        userAnswer: null
                    },
                    {
                        id: '1',
                        type: 'single',
                        content: '2.行为金融学的相关研究表明，用户往往会夸大自己的风险偏好，尤其适用于那些受过良好教育的，过于自信的男性投资者。',
                        options: ['A.正确', 'B.错误'],
                        answer: [0],
                        userAnswer: null
                    },
                    {
                        id: '1',
                        type: 'single',
                        content: '3.降低投资风险的最佳方式就是进行分散投资，而不是单独投资于某一资产，即“不要把所有的鸡蛋放进一个篮子里”',
                        options: ['A.正确', 'B.错误'],
                        answer: [0],
                        userAnswer: null
                    },    
                    {
                        id: '1',
                        type: 'single',
                        content: '4.如果用户的风险偏好较高，即更加注重收益，那么投资组合处于有效前沿末端部分；如果风险偏好较低，即更加注重风险，那么投资组合处于有效前沿的前端部分',
                        options: ['A.正确', 'B.错误'],
                        answer: [0],
                        userAnswer: null
                    },                                                                                  
                    {
                        id: '1',
                        type: 'single',
                        content: '5.资产配置时，对相关性较高的资产进行组合，能够有效对冲风险。',
                        options: ['A.正确', 'B.错误'],
                        answer: [1],
                        userAnswer: null
                    },  
                    {
                        id: '1',
                        type: 'single',
                        content: '6.随着证券数量的增加，虽然组合的平均收益不会有所影响，但是组合标准差会随证券数量的增多而降低。',
                        options: ['A.正确', 'B.错误'],
                        answer: [0],
                        userAnswer: null
                    },  
                    {
                        id: '1',
                        type: 'single',
                        content: '7.对于风险承受能力较低的投资者，往往投资权益类资产的权重相对较大。',
                        options: ['A.正确', 'B.错误'],
                        answer: [1],
                        userAnswer: null
                    },  
                    {
                        id: '1',
                        type: 'single',
                        content: '8.风险较大的投资，其要求的收益率相对较高；反之，预期收益率较低的投资，风险也相对较小。',
                        options: ['A.正确', 'B.错误'],
                        answer: [0],
                        userAnswer: null
                    },  
                    {
                        id: '1',
                        type: 'single',
                        content: '9.非系统性风险也叫不可分散风险，不能通过投资组合进行分散。',
                        options: ['A.正确', 'B.错误'],
                        answer: [1],
                        userAnswer: null
                    },  
                    {
                        id: '1',
                        type: 'single',
                        content: '10.系统性风险也被称为可分散风险，可以通过投资组合进行分散。',
                        options: ['A.正确', 'B.错误'],
                        answer: [1],
                        userAnswer: null
                    },  
                ],
          question: {},
            state: '', // 'start', 'end',
            flag:'',//T,F,1,2,3,4
          note: {
          backgroundImage: "url(" + 'img/C3_bg.png' + ")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize:'100% 100%'
          },
          bg_box: {
          backgroundImage: "url(" + 'img/answer_bg.jpg' + ")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize:'100% 100%'
          },
    }
  },
        computed: {
            type() {
                let types = {
                    multiple: '多选题',
                    single: '判断题',
                }
                return types[this.question.type]
            },
        score() {
                let successCount = 0
                for (let question of this.questions) {
                    if (!question.userAnswer) {
                        continue
                    }
                    if (question.type === 'multiple') {
                        if (question.answer.length !== question.userAnswer.length) {
                            continue
                        }
                        let isRight = true
                        for (let i = 0; i < question.answer.length; i++) {
                            if (question.answer[i] !== question.userAnswer[i]) {
                                isRight = false
                                break
                            }
                        }
                        if (isRight) {
                            successCount++
                        }
                    }else if (question.type === 'single') {
                        if (question.userAnswer === question.answer) {
                            successCount++
                        }
                    }
                }
                return parseInt(successCount )
            },
        },
  mounted(){
      this.question = this.questions[this.questionIndex]
  },
   methods: {
      boolToText(bool) {
        return bool ? '正确' : '错误'
      },
        isSelected(question, index) {
                if (question.type === 'multiple') {
                    if (!question.userAnswer) {
                        return false
                    }
                    for (let answer of question.userAnswer) {
                        if (answer === index) {
                            return true
                        }
                    }
                    return false
                } else if (question.type === 'single') {
                    return question.userAnswer === index
                }
                return false
            },
            isSuccess(question) {
                if (!question.userAnswer) {
                    return false
                }
                if (question.type === 'multiple') {
                    // 少选多选不给分
                    if (question.answer.length !== question.userAnswer.length) {
                        return false
                    }
                    for (let i = 0; i < question.answer.length; i++) {
                        if (question.answer[i] !== question.userAnswer[i]) {
                            return false
                        }
                    }
                    return true
                }
                if (question.type === 'single') {
                     if (question.userAnswer === question.answer){
                        return question.userAnswer === question.answer
                     }
                }
                return false
            },
            doOption(index) {
               if (this.question.type === 'multiple') {
                    let userAnswer = this.questions[this.questionIndex].userAnswer
                    if (!userAnswer) {
                        userAnswer = []
                    }
                    if (userAnswer) {
                        for (let i = 0; i < userAnswer.length; i++) {
                            if (userAnswer[i] === index) {
                                userAnswer.splice(i, 1)
                                return
                            }
                        }
                    }
                    userAnswer.push(index)
                    // 答案排序
                    userAnswer = userAnswer.sort()
                    this.questions[this.questionIndex].userAnswer = userAnswer

                } else if (this.question.type === 'single') {
                    this.questions[this.questionIndex].userAnswer = index
                }
            },
            prevQuestion() {
                this.questionIndex--
                this.question = this.questions[this.questionIndex]
            },

            nextQuestion() {
                this.questionIndex++
                this.question = this.questions[this.questionIndex]
            },
            start() {
                this.state = 'start'
            },
            restart() {
                this.start()
                this.questionIndex++
                this.question = this.questions[this.questionIndex]
                this.flag=''
            },
            viewAnswer() {
                this.state = 'end'
            },
            numberToLetter(number) {
                let arr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
                return arr[number]
            }
        }
    }
</script>


