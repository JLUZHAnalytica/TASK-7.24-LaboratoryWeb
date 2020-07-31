<template>
            <div>
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
</template>
<script>
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
        }
    },
    props: {
        "ParentStr": String
  }    
}
</script>
<style scoped>
html{
    background-color: white;
}
</style>