<template>
    <div class="mainBox">
        <div class="head">
            <v-text>试验报告</v-text>
            <el-button @click="downloadpdf()">
                <span><i class="el-icon-download"></i></span>
            </el-button>
        </div>
        <div class="tBox">
            <div class="tHead">
            <p>实验目的</p>
            </div>
            <div class="tMsg">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
                </p>
            </div>
        </div>
        <div class="tBox">
            <div class="tHead">
            <p>实验原理</p>
            </div>
            <div class="tMsg">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
                </p>
            </div>
        </div>
        <div class="tBox">
            <div class="tHead">
            <p>实验结果</p>
            </div>
            <div class="tMsg">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
                </p>
            </div>
        </div>
        <div class="tBox">
            <div class="tHead">
            <p>心得体会</p>
            </div>
            <div class="shuru">
                <el-input
                type="textarea"
                :rows="2"
                placeholder="请输入内容"
                v-model="textmsg">
                </el-input>
                <el-button>提交</el-button>
            </div>
        </div>
    </div>
</template>
<script>
//import html2canvas from 'html2canvas';
export default {
    components: {
        //html2canvas
    },
    data(){
        return{
            textmsg:""
        }
    },
    methods:{
        downloadpdf(){

        }
    }    
}

</script>
<style>
    .mainBox{
        margin: 0;
        padding: 0;
    }
    .tHead{
        text-align: left;
    }
    .tMsg{
        width:80%;
        margin:auto;
    }
</style>