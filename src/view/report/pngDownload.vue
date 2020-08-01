<template>
            <div>
            <a ref="btn" :href="dataURL" download='实验报告.jpg'>如果未自动下载，点击这里下载报告</a>              
            <div id="takePhoto" ref="downloadImage">
                <div class="bigbox">
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
                    <div class="tBox">
                        <div class="tHead">
                            <p class="ctitle">心得体会</p>
                        </div>
                        <div class="child-msgBox">
                            <p>{{ParentStr}}</p>
                        </div>
                    </div>
                </div>
                </div>
        </div>
</template>
<script>
import html2canvas from 'html2canvas';
import {downloadPng} from "./report"

export default {
    data(){
        return{
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
            }],
            dataURL:"",
        }
    },
    props: {
        ParentStr:{
            type:String,
            default:"this is default"
        }
    },
    methods:{
        downloadPng:downloadPng(),
        takePhoto() {
            html2canvas(this.$refs.downloadImage,{
                backgroundColor: "#ffffff",  //取消图片白边问题
                useCORS: true,  //如果是动态加载的图片 获取图片
            }).then((canvas) => {
                let dataurl = canvas.toDataURL("image/png");
                this.dataURL = dataurl;
            });
        },
    },
    mounted(){
        this.takePhoto()
        this.downloadPng

        //this.$nextTick(() => {
        //this.$refs['btn'].$el.click()
        //})
        console.log("11")        
    }

}
</script>
<style scoped>
html{
    background-color: white;
}
</style>