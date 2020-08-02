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
                                <table>
                                <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                 </tr>
                                </thead>
                                <tr v-for="item in tableData" :key="item.lesson">
                                    <td>{{item.lesson}}</td>
                                    <td>{{item.score}}</td>
                                </tr>
                                </table>
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
                            <p>{{delivermsg}}</p>
                        </div>
                    </div>
                </div>
                </div>
        </div>
</template>
<script>
import html2canvas from 'html2canvas';
//import {downloadPng} from "./report"

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
            i:0,
        }
    },
    props: {
        delivermsg:{
            type:String,
            default:"this is default"
        }
    },
    methods:{
        //downloadPng:downloadPng(),

    },
    mounted(){
            html2canvas(this.$refs.downloadImage,{
                backgroundColor: "#ffffff",  //取消图片白边问题
                useCORS: true,  //如果是动态加载的图片 获取图片
                height:900,//修改高度
            }).then((canvas) => {
                let dataurl = canvas.toDataURL("image/png");
                this.dataURL = dataurl;
            });
        //this.downloadPng

        //this.$nextTick(() => {
        //this.$refs['btn'].$el.click()
        //})
        console.log("钩子函数 mounted") 
      
    },
    updated(){
        if(this.i==1){
        this.$refs.btn.click()            
        }
        this.i+=1
        console.log("钩子函数 updataed")        
    }

}
</script>
<style scoped>
html{
    background-color: white;
}
</style>