<template>
  <div  style="height: 100%; width: 100%;" class="note" :style ="note">
    <div class="header">   <!-- 头部-->
    <div class="learn">
       <router-link to="/learn">
             <img src="img/3-tab-study-nor@2x.png" >
       </router-link>
    </div>
    <div class="answer">
      <router-link to="/answer">
        <img src="img/3-tab-answer-select@2x.png" >
      </router-link>
    </div>
    </div>  
    <!-- 快问快答 -->
    <div class="answer_question_box" >
        <div class="bg_box" :style ="bg_box"> 
            <div class="examination">
                <ul v-for="(item,i) in examinationData" :key="i">
                  <div>{{i+1}}、{{item.question}}</div>
                    <li v-for="(son,index) in item.answer" :key="index">
            <el-checkbox
              v-model="radio[i]"
              :label="son.value"
              :name="son.name"
              @change="getIputValue(i)"
            ></el-checkbox>
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


</style>
<script>
export default {
    data(){
      return{
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
  mounted(){
    this.changePhoto(0)
    document.addEventListener("keydown", (event) => {
      if (event.which == 37)
        this.previousPhoto()
      if (event.which == 39)
        this.nextPhoto()
    })
  },
  methods :{
    changeQuestions (index) {
      this.activeQuestions = index
    },
    nextQuestion () {
      this.changePhoto( this.activePhoto+1 < this.photos.length ? this.activePhoto+1 : 0 )
    },
    previousQuestions () {
      this.changePhoto( this.activePhoto-1 >= 0 ? this.activePhoto-1 : this.photos.length-1 )
    }
  }
}
</script>
