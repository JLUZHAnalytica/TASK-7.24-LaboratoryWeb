<template>
  <el-button type="text" @click="open">买入</el-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$alert('将投入100000元申购该投资组合', '标题名称', {
          confirmButtonText: '确定买入',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
    }
  }
</script>