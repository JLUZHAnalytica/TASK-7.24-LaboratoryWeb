<template>
  <div id="background">
    <el-image
            :src="images[0]"
            fit="contain"></el-image>
    <div class="login-block">
      <div class="info">
        <span>用户信息</span>
        <el-button type="text" id="skip" @click="jump">跳过</el-button>
      </div>
      <div class="form-block">
        <el-form ref="form" :model="form" label-width="40px" size="medium">
          <el-form-item label="">
            <div class="input-box">
              <img :src="images[2]" class="icons" alt=""/>
              <span class="scroller">|</span>
              <input class="login_input" placeholder="姓名" type="text" v-model="form.name"/>
            </div>
          </el-form-item>
          <el-form-item label="">
            <div class="input-box">
              <img :src="images[3]" class="icons" alt=""/>
              <span class="scroller">|</span>
              <input class="login_input" placeholder="班级" type="text" v-model="form.class"/>
            </div>
          </el-form-item>
          <el-form-item label="">
            <div class="input-box">
              <img :src="images[4]" class="icons" alt=""/>
              <span class="scroller">|</span>
              <input class="login_input" placeholder="专业" type="text" v-model="form.major"/>
            </div>
          </el-form-item>
          <el-form-item label="">
            <div class="input-box">
              <img :src="images[5]" class="icons" alt=""/>
              <span class="scroller">|</span>
              <input class="login_input" placeholder="学校/单位名称" type="text" v-model="form.school"/>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit" id="login-button">开始实验</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          class: '',
          major: '',
          school: ''
        },
        images:[require('@/assets/login-bg@2x.png'),
          require('@/assets/login-input@2x.png'),
          require('@/assets/name@2x.png'),
          require('@/assets/class@2x.png'),
          require('@/assets/major.png'),
          require('@/assets/school@2x.png'),]
      }
    },
    methods:{
      onSubmit(){
        this.$message('登录成功');
        this.$router.push('/nav')
      },
      jump(){
        this.$router.push('/nav')
      }
    }
  }
</script>

<style scoped>
  #background{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  .login-block {
    position: absolute;
    width: 23%;
    height: 50%;
    left: 57%;
    top: 31%;
    border: 1px solid #409EFF;
  }
  .form-block {
    margin: 10% 15%;
  }
  #login-button {
    width: 100%;
    margin-top: 10%;
  }
  #skip {
    float: right;
    color: gray;
  }
  .info {
    padding: 12px;
  }
  .icons{
    position: absolute;
    left: 10px;
    margin-top: 8px;
  }
  .scroller{
    position: absolute;
    left: 42px;
    margin-top: 2px;
  }
  .login_input {
    background-color: #FFF;
    border-radius: 4px;
    border: 1px solid #DCDFE6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding-left: 50px;
    width: 100%;
  }
  .input-box {
    box-shadow: 0 0 20px 1px #ced3d7;
  }
</style>
