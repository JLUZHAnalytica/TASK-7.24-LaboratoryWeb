<template>
  <div  style="height: 100%; width: 100%;" class="note" :style ="note">
    <div class="header">   <!-- 头部-->
    <div class="learn">
       <router-link to="/learn" style="width: 250px;position: absolute;right: 650px;top: 60px;">
             <img src="img/3-tab-study-nor@2x.png" >
       </router-link>
    </div>
    <div class="answer" style="width: 250px;position: absolute;right: 450px;top: 60px;">
      <router-link to="/answer">
        <img src="img/3-tab-answer-select@2x.png" >
      </router-link>
    </div>
    <div class="return_main" style="text-decoration:none;width: 119px;background: #fff;border-radius: 8px;position: absolute;right: 121px;top: 37px;height: 51px;font-size: 16px;">
      <router-link to="/nav" style="text-decoration: none;">
      <p class="return_text" style="color:#000!important;text-decoration: none;">
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
            <h3 class="title" >{{ '【'+type+'】'+question.content }}</h3>
            <div>分数：{{ score }}</div>
            <ul class="options" v-if="question.type === 'judgment'">
                <input type="checkbox"
                    class="item"
                    :class="{selected: isSelected(question, true)}"
                    @click="doOption(true)">正确
                <input type="checkbox" class="item"
                    :class="{selected: isSelected(question, false)}"
                    @click="doOption(false)">错误
            </ul>
            <ul class="options">
                <li class="item" v-for="(option, index) in question.options"
                    :key="option"
                    :class="{selected: isSelected(question, index)}"
                    @click="doOption(index)">{{ option }}
                </li>
            </ul>
            <div class="op">
                <!-- <button class="btn" label="上一题" @click="prevQuestion" :disabled="questionIndex === 0" /> -->
                <!-- <el-button class="btn" label="下一题" primary @click="nextQuestion" :disabled="questionIndex === questions.length - 1" >下一题 </el-button> -->
                <el-button class="btn" label="确定" @click="viewAnswer" :disabled="false" v-if="state === ''  || state === 'start'">确定</el-button>
            </div>
            <div class="answer_card" v-if="state === 'end'">
            <ul class="answer-list">
                <li class="item">
                <div :class="{success: isSuccess(question), error: !isSuccess(question)}">
                    <h3 v-if="question.type === 'multiple' && !isSuccess(question)">
                        回答错误，正确答案为：
                        <div class="right_answer">
                             <li v-for="answer in question.answer" :key="answer">
                             {{ numberToLetter(answer) }}
                            </li>!
                        </div>
                    </h3>
                    <h3 v-if="question.type === 'judgment' && !isSuccess(question)">
                    回答错误，正确答案为：{{ boolToText(question.answer) }}！
                    </h3>
                    <h3 v-if="isSuccess(question)"> 回答正确啦</h3>
                    <el-button class="btn" label="下一题" primary @click="restart">下一题</el-button>
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
    position: relative;
    height: 771px;
    width: 95%;
    position: absolute;
    top: 123px;
    left: 46px;
    margin: auto;
    border-radius: 8px;
    opacity: 1;
    background: rgb(240, 238, 238);
}
.bg_box{
    position: relative;
    height: 740px;
    width: 98%;
    position: absolute;
    top: 20px;
    left: 16px;
    margin: auto;
    border-radius: 8px;
    opacity: 1;
}
.exam-box{
  position: absolute;
  left: 30%;
}
li{
   list-style: none; 
}
.right_answer{
    position: absolute;
    left: 257px;
    width: 67px;
    top: 195px;
}
.right_answer li{
    float: left;
}
.title{
    width: 100%;
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
                        type: 'judgment',
                        content: '所有的苹果都是水果',
                        answer: true,
                        userAnswer: null
                    },
                     {
                        id: '1',
                        type: 'judgment',
                        content: '所有的苹果都是水果',
                        answer: true,
                        userAnswer: null
                    },
                    {
                        id: '1',
                        type: 'multiple',
                        content: '1.系统性风险包括',
                        options: ['A.人事变动风险', 'B.经济周期波动风险',' C.利率风险',' D.购买力风险'],
                        answer: [1, 2,3],
                        userAnswer: null
                    },
                    {
                        id: '1',
                        type: 'multiple',
                        content: '1.系统性风险包括',
                        options: ['A.人事变动风险', 'B.经济周期波动风险',' C.利率风险',' D.购买力风险'],
                        answer: [1,2,3],
                        userAnswer: null
                    },

                ],
          question: {},
                state: '', // 'start', 'end',
          note: {
          backgroundImage: "url(" + 'img/3-bg@2x.png' + ")",
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
                    judgment: '判断题',
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
                    }else if (question.type === 'judgment') {
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
                } else if (question.type === 'judgment') {
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
               
                if (question.type === 'judgment') {
                     if (question.userAnswer === question.answer){
                         return true
                     }
                     return false
                }
                return false
            },
            isDone(question) {
                
                if (question.type === 'multiple') {
                    return question.userAnswer && question.userAnswer.length
                }
               
                if (question.type === 'judgment') {
                    return question.userAnswer === true || question.userAnswer === false
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
                } else if (this.question.type === 'judgment') {
                    this.questions[this.questionIndex].userAnswer = index
                }
            },
            prevQuestion() {
                this.questionIndex--
                this.question = this.questions[this.questionIndex]
            },
            selectIndex(index) {
                this.questionIndex = index
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


