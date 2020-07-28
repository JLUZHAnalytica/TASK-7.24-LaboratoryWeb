<template>
    <div>
        <el-container>
            <el-header >风险评估问卷</el-header>
            <el-container>
                <el-aside width="200px">
                    <el-image style="width: 100px; height: 500px" :src="url" :fit="fit" ></el-image>
                </el-aside>
                <el-main>
                        <p>1.请问您的年龄处于（    ）。</p>
                        <div>
                            <el-radio v-model="radio1" label="1" border>30岁以下</el-radio>
                            <el-radio v-model="radio1" label="2" border>31-40岁</el-radio>
                        </div>
                        <div>
                            <el-radio v-model="radio1" label="3" border>41-50岁</el-radio>
                            <el-radio v-model="radio1" label="4" border>51-60岁</el-radio>
                        </div> 
                        <el-button-group>
                            <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
                            <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
                        </el-button-group>  
                </el-main>
            </el-container> 
        </el-container>
    </div>
</template>

<style>
    .el-header{
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        height:60px;
        line-height: 60px;
        font-size: 30px;
        font-family: "Helvetica Neue"
    }
    .el-main {
        background-color: #ffffff;
        color: #333;
        text-align: center;
        line-height: 80px;
        font-size: 20px;
        
        }
    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }


</style>

<script>
  export default {
    data () {
      return {
        radio1: '1',
        radio2: '1',
        radio3: '1',
        radio4: '1',
        url: 'https://i.loli.net/2020/07/28/JTvZjiX2bwEL7uU.png'
        } 
    }
  }
</script>