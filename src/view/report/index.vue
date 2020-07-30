<template>
    <div class="mainBox" id="takePhoto" ref="downloadImage">
        <div class="contentBox">
            <div class="head">
                <!-- <img src="@/assets/2-btn-result@2x.png"> -->
                <div v-if="haveUpload" id="ignore">
                <a :href="dataURL" download='实验报告.jpg'>
                    <img src="@/assets/15-btn-download@2x.png">            
                </a>
                </div>
                <div v-else>
                    <img src="@/assets/15-btn-download@2x.png">            
                </div>
            </div>
            <div>
                <div class="bigbox">
                    <div>
                        <img src="@/assets/15-icon-1@2x.png" alt="" class="img1">
                    </div>
                    <div class="tBox">
                        <div class="tHead">
                            <p class="title-aim">实验目的</p>
                        </div>
                        <div class="tMsg">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="bigbox">
                    <div>
                        <img src="@/assets/15-icon-2@2x.png" alt="" class="img2">
                    </div>
                    <div class="tBox">
                        <div class="tHead">
                        <p class="ctitle">实验原理</p>
                        </div>
                        <div class="tMsg">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="bigbox">
                    <div>
                        <img src="@/assets/15-icon-3@2x.png" alt="" class="img3">
                    </div>
                    <div class="tBox">
                        <div class="tHead">
                        <p class="ctitle">实验成绩</p>
                        </div>
                        <div class="tMsg">
                            <div>
                                <!--实验数据-->
                                <template>
                                    <el-table
                                        :data="tableData"
                                        stripe
                                        style="width: auto"
                                        :show-header="showHeader">
                                        <el-table-column
                                        prop="lesson"
                                        label=""
                                        width="180">
                                        </el-table-column>
                                        <el-table-column
                                        prop="score"
                                        label=""
                                        width="180">
                                        </el-table-column>
                                    </el-table>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bigbox">
                    <div>
                        <img src="@/assets/15-icon-4@2x.png" alt="" class="img4">
                    </div>
                    <div class="tBox">
                        <div class="tHead">
                            <p class="ctitle">心得体会</p>
                        </div>
                        <div v-show="isShow" class="gain">
                            <el-input
                                type="textarea"
                                autosize
                                placeholder="请输入内容"
                                v-model="textmsg">
                            </el-input>
                            
                        </div>
                        <div v-show="!isShow">
                            <p>{{textmsg}}</p>
                        </div>
                    </div>
                </div>        
            </div>
        </div>
        <button v-show="isShow" @click="onSubmit" class="bt-submit">提交</button>    
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
            showHeader:false,
            tableData: [{
            lesson: '快问快答',
            score: '15',
            }, {
            lesson: '考核部分',
            score: '85',
            }, {
            lesson: '总成绩',
            score: '100',
            }]
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
                ignoreElements:(element)=>{
                if(element.id==='ignore')
                 return true;
                },
            }).then((canvas) => {
                let dataurl = canvas.toDataURL("image/png");
                this.dataURL = dataurl;
            });
        },
        onSubmit(){
            // alert('132')
            this.upload()
            this.$message({
                message:'提交成功',
                type:'success'
            })
        },
    }    
}

</script>
<style >
    html{
        background-image: url("c15-img/3-bg@2x.png") ;
        background-size: 100% auto;
    }
    .head img{
        position: relative;
        left: 640px;
        top: 55px;
        width: 45px;
    }
    .mainBox{
        margin: 0;
        padding: 0;
        height: 500px;
        background: url("c15-img/15-bg@2x.png");
        background-size: 100% 100%;
        position: relative;
        top: 24px;
        width: 1501px;
        height: 632px;
        left: 0.6%;
    }
    .contentBox{
        width: 100%;
        overflow-y: scroll;
        border: 1px solid black;
        height: 530px;
    }
    .bigbox{
        width: 1300px;
        position: relative;
        left: 135px;
        top: 10px;
    }
    .img1{
        width: 73px;
        float: left;
        position: relative;
        left: -8px;
    }
    .img2{
        width: 50px;
        float: left;
    }
    .img3{
        width: 50px;
        float: left;
    }
    .img4{
        width: 50px;
        float: left;
        position: relative;
        left: 2px;
    }
    .tbox{
        float: left;
        width: 1050px;
        margin-left: 10px;
    }
    .title-aim{
        font-size: 21px;
        font-weight: 550;
        position: relative;
        left: -3px;
        top: 15px;
    }
    .ctitle{
        font-size: 21px;
        font-weight: 550;
        position: relative;
        left: 1.5%;
        top: 10px;
    }
    .tHead{
        text-align: left;
    }
    .tMsg{
        width: 1000px;
        padding-left: 86px;
    }
    .tMsg p{
        width: 1060px;
        margin-bottom: -8px;
    }
    /* .inputbox{
        width: 1000px;
    } */
    .el-textarea__inner{
        width: 1060px !important;
        position: relative;
        left: 90px;
    }
    .bt-submit{
        width: 228px;
        height: 43px;
        background-color: #5FCBFC;
        border-radius: 6px;
        border: none;
        font-size: 18px;
        color: white;
        outline: none;
        position: relative;
        top: 25px;
    }
</style>
