<template>
  <div id="background">
    <el-image :src="images[0]" fit="contain"></el-image>
    <div class="login-block">
      <div class="info">
        <span>用户信息</span>
        <el-button type="text" id="skip" @click="jump">跳过</el-button>
      </div>
      <div class="form-block">
        <el-form ref="form" :model="form" label-width="40px" size="medium">
          <el-form-item label>
            <el-input prefix-icon="el-icon-user" placeholder="姓名" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label>
            <el-input prefix-icon="el-icon-reading" placeholder="班级" v-model="form.class"></el-input>
          </el-form-item>
          <el-form-item label>
            <el-input prefix-icon="el-icon-notebook-2" placeholder="专业" v-model="form.major"></el-input>
          </el-form-item>
          <el-form-item label>
            <el-input prefix-icon="el-icon-school" placeholder="学校/单位名称" v-model="form.school"></el-input>
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
        name: "",
        class: "",
        major: "",
        school: "",
      },
      images: [require("@/assets/login-bg@2x.png")],
    };
  },
  methods: {
    onSubmit() {
      this.$message("登录成功");
      this.$router.push("/nav");
    },
    jump() {
      this.$router.push("/nav");
    },
  },
};
</script>

<style scoped>
#background {
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
  border: 1px solid #409eff;
}
.form-block {
  margin: 10% 15%;
}
#login-button {
  padding: 9px 40%;
  margin-top: 10%;
}
#skip {
  float: right;
  color: gray;
}
.info {
  padding: 12px;
}
</style>
