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
          <el-button type="text" @click="open">?</el-button>
          <el-table
          :data="tableData"
          stripe
          style="width: 100%">
          <el-table-column
              prop="classify"
              label="市场分类"
              width="180">
          </el-table-column>
          <el-table-column
              prop="represent"
              label="代表"
              width="180">
          </el-table-column>
          <el-table-column
              prop="advantage"
              label="优势">
          </el-table-column>
          <el-table-column
              prop="disadvantage"
              label="劣势">
          </el-table-column>
          </el-table>


        </el-main>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first',
        tableData: [{
          classify: '2016-05-02',
          represent: '王小虎',
          advantage: '上海市普陀区金沙江路 1518 弄',
          disadvantage: '上海市普陀区金沙江路 1518 弄'
        }, {
          classify: '2016-05-04',
          represent: '王小虎',
          advantage: '上海市普陀区金沙江路 1518 弄',
          disadvantage: '上海市普陀区金沙江路 1518 弄'
        }, {
          classify: '2016-05-01',
          represent: '王小虎',
          advantage: '上海市普陀区金沙江路 1518 弄',
          disadvantage: '上海市普陀区金沙江路 1518 弄'
        }, {
          classify: '2016-05-03',
          represent: '王小虎',
          advantage: '上海市普陀区金沙江路 1518 弄',
          disadvantage: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    },
    methods: {
      handleClick(tab, event) {
      console.log(tab, event);
      },
      open() {
        this.$alert('资产大类的选取\n  持续性的研究表明', '？按钮', {
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
