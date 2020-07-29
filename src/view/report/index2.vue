<template>
    <div>
        <div class="container">            
            <div class="content">
                <!-- <el-button type="primary" icon="el-icon-download"></el-button> -->
                <!-- <i class="el-icon-download"></i> -->
                <ul class="title">
                    <img src="c15-img/15-icon-1@2x.png" alt="">
                    <li>实验目的</li>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
                        </p>
                    <li>实验原理</li>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
                        </p>
                    <li>实验结果</li>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
                        </p>
                    <li>心得体会</li>
                    <el-input
                    type="textarea"
                    :autosize="{ minRows: 2, maxRows: 4}"
                    placeholder="请输入内容"
                    v-model="text">
                    </el-input>
                </ul>
                <button @click="onSubmit" class="submit">提交</button>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            text:'',
        }
    },
    methods:{
        onSubmit(){
            // alert('132')
            this.$message({
                message:'提交成功',
                type:'success'
            })
        }
    }
}
</script>
<style>
html{
    background: url("c15-img/3-bg@2x.png") no-repeat top fixed;
    background-size: 100% 100%;
}
.content{
    /* float: left; */
    background: url('c15-img/15-bg@2x.png');
    /* width: 200px; */
    position: relative;
    left: 9px;
    width: 1501px;
    height: 632px;
    top: 23px;
    background-size: 100% 100%;
}
.title{
    width: 100px;
    position: relative;
    left: 12%;
    /* float: left; */
}
.title li{
    /* float: left; */
    list-style-type: none;
    font-size: 25px;
    font-weight: 600;
    margin: 5px 0px;
}
.title p{
    width: 1000px;
    margin-left: 25px;
}
.title img{
    float: left;
    /* width: 10px; */
    /* width: 100%; */
}
.el-button el-button--default{
    background-color: aqua;
    
}
.submit{
    width: 228px;
    height: 43px;
    background-color: #5FCBFC;
    border-radius: 6px;
    border: none;
    font-size: 18px;
    color: white;
    outline: none;  /*取消点击后的边框*/
    position: relative;
    top: 87px;
}
.submit:active{
    border: 2px solid #51AED7;
}
.el-textarea{
    width: 200px;
}
.el-textarea__inner{
    width: 200px;
}
</style>