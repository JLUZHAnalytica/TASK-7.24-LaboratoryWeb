<template>
    <div>
      <el-aside>
        <template>
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="用户管理" name="first">描述说明</el-tab-pane>
          </el-tabs>
        </template>
      </el-aside>
      <el-main>
        <el-row class="demo-autocomplete">
            <el-input
            type="textarea"
            :rows="5"
            placeholder="请输入内容"
            v-model="state1">
            </el-input>
            <el-input
            type="textarea"
            :rows="5"
            placeholder="请输入内容"
            v-model="state1">
            </el-input>
        </el-row>    
        <el-row class="demo-autocomplete">
            <el-input
            type="textarea"
            :rows="5"
            placeholder="请输入内容"
            v-model="state3">
            </el-input>
            <el-input
            type="textarea"
            :rows="5"
            placeholder="请输入内容"
            v-model="state4">
            </el-input>
        </el-row> 
        <el-row class="demo">   
            <el-input v-model="input" placeholder="资产"></el-input>
            <el-button type="primary">买入</el-button>
            <el-button type="primary">调整</el-button>
        </el-row> 
      </el-main>
    </div>
</template>
<script>
export default {
  data() {
    return {
      state1: '',
      state2: '',
      state3: '',
      state4: '',
      input: ''

    }
  }
}
</script>

