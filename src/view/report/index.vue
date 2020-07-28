<template>
    <div class="mainBox">
        <div class="head">
            <img src="@/static/img/2-btn-result@2x.png">
            <div v-if="haveUpload">
            <a :href="dataURL" download='实验报告.jpg'>
                <img src="@/static/img/15-btn-download@2x.png">            
            </a>
            </div>
            <div v-else>
                <img src="@/static/img/15-btn-download@2x.png">            
            </div>
        </div>
        <div id="takePhoto" ref="downloadImage">
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
            <div v-show="isShow">
                <el-input
                type="textarea"
                :rows="2"
                placeholder="请输入内容"
                v-model="textmsg">
                </el-input>
                <el-button @click="upload()">提交</el-button> 
            </div>
            <div v-show="!isShow">
                <p>{{textmsg}}</p>
            </div>
            </div>
            </div>
        <!--拍照部分结束-->
    </div>
</template>
<script>
import html2canvas from 'html2canvas';

export default {
    components: {
        //html2canvas
    },
    data(){
        return{
            textmsg:"",
            dataURL:"",
            isShow:true,
            haveUpload:false,
        }
    },
    updated(){
        this.takePhoto();
    },
    methods:{
        upload(){
            this.isShow=!this.isShow;
            this.haveUpload=true;
        },
        takePhoto() {
            html2canvas(this.$refs.downloadImage,{
                backgroundColor: "#ffffff",  //取消图片白边问题
                useCORS: true,  //如果是动态加载的图片 获取图片
            }).then((canvas) => {
                let dataurl = canvas.toDataURL("image/png");
                this.dataURL = dataurl;
            });
        },
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
