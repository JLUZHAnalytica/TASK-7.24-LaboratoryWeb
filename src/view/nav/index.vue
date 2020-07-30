<template>
  <div id="background">
    <el-image  class="background" :src="bg" fit="fill"></el-image>
    <div class="btn-group">
      <el-row :gutter="10">
        <el-col :span="8">
          <router-link to="/learn">
            <el-image :src="images[2]" style="width: 80%; height: 80%;"></el-image>
            <el-image :src="images[12]" style="position: absolute;top: 14%;left: 13%;"></el-image>
          </router-link>
        </el-col>
        <el-col :span="8">
          <el-image style="width: 80%; height: 80%;" :src="images[1]"  @click="centerDialogVisible = true"></el-image><!--cursor:pointer -->
          <el-image :src="images[10]" style="position: absolute;top: 14%;left: 46%;"></el-image>
          <el-dialog :visible.sync="centerDialogVisible" width="55%" custom-class="selectMode">
            <el-image :src="images[4]" fit="fill"></el-image>
            <div class="el-dialog-btn"  style="margin-left: 10px;margin-right: -10px;">
              <el-row :gutter="20">
                <el-col :span="10">
                  <router-link to="/main/teach">
                    <el-image :src="images[5]"></el-image>
                    <el-image :src="images[9]" style="position: absolute;top: 14%;left: 15%;"></el-image>
                  </router-link>
                </el-col>
                <el-col :span="10">
                  <router-link to="/main/test">
                    <el-image :src="images[6]"></el-image>
                    <el-image :src="images[8]" style="position: absolute;top: 14%;left: 57%;"></el-image>
                  </router-link>
                </el-col>
              </el-row>
            </div>
            <el-image
              :src="images[7]"
              style="position: fixed;left: 73%;top: 18%;cursor:pointer"
              @click="centerDialogVisible = false"
            ></el-image>
          </el-dialog>
        </el-col>
        <el-col :span="8">
          <router-link to="/report">
            <el-image :src="images[3]" style="width: 80%; height: 80%;"></el-image>
            <el-image :src="images[11]" style="position: absolute;top: 14%;left: 80%;"></el-image>
          </router-link>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      centerDialogVisible: false,
      bg:require("@/assets/2-bg@2x.png"),
      images: [
        require("@/assets/2-bg@2x.png"),
        require("@/assets/2-btn-begin@2x.png"),
        require("@/assets/2-btn-study@2x.png"),
        require("@/assets/2-btn-result@2x.png"),
        require("@/assets/4-bg@2x.png"),
        require("@/assets/4-btn-study@2x.png"),
        require("@/assets/4-btn-exam@2x.png"),
        require("@/assets/4-btn-exit@2x.png"),
        require('@/assets/4-icon-exam@2x.png'),
        require('@/assets/4-icon-study@2x.png'),
        require('@/assets/2-icon-begin@2x.png'),
        require('@/assets/2-icon-result@2x.png'),
        require('@/assets/2-icon-study@2x.png')
      ],
    };
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
}
.btn-group {
  position: absolute;
  top: 40%;
  left: 13%;
}
.el-dialog-btn {
  position: fixed;
  top: 29%;
  left: 29%;
}
.el-row{
  left: -91px;
}
</style>

<style>
.selectMode .el-dialog__body,
.el-dialog__header {
  padding: 0 !important;
  height: 0;
}
</style>