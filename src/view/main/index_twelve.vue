<template>
    <div>
        <el-aside>
          <template>
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                <el-tab-pane label="用户管理" name="first">描述说明</el-tab-pane>
            </el-tabs>
          </template>
        </el-aside>
        <el-footer>
            <el-row>
                <el-button type="primary">上一步</el-button>
                <el-button type="primary">下一步</el-button>
            </el-row>
        </el-footer>
    </div>
</template>
