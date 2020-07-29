<template>
  <div  style="height: 100%; width: 100%;" class="note" :style ="note">
    <div class="header">   <!-- 头部-->
    <div class="learn">
       <router-link to="/learn">
             <img src="img/3-tab-study-select@2x.png" >
       </router-link>
    </div>
    <div class="answer">
      <router-link to="/answer">
        <img src="img/3-tab-answer-nor@2x.png" >
      </router-link>
    </div>
    <div class="return_main">
      <router-link to="/answer">
      <p class="return_text">
        返回
      </p>
      </router-link>
    </div>
    </div>  
    <div class="vueGallery">   <!-- ppt部分 -->
    <div  class="big_box" :style ="big_box" >
          <div class="activePhoto" :style="'background-image: url('+photos[activePhoto]+');'+'background-size: 100% 100%;'">
          </div>
    </div>
    <div class="left_box">
    <div class="thumbnails">
      <div 
           v-for="(photo, index) in photos"
            :key="index"
            @click="changePhoto(index)"
            :class="{'active': activePhoto == index}" :style="'background-image: url('+photo+')'">
            <img :src="photo" alt="">
      </div>
    </div> 
    </div>

  </div>
  </div>
</template>
<style>
.note{
  position: absolute;
  top: 0px;
  left: 0px;
}
.learn{
    width: 250px;
    position: absolute;
    right: 480px;
    top: 19px;
}
.answer{
    width: 250px;
    position: absolute;
    right: 280px;
    top: 19px;
}
.return_main{
    text-decoration:none;
    width: 119px;
    background: #fff;
    border-radius: 8px;
    position: absolute;
    right: 121px;
    top: 37px;
    height: 30px;
    font-size: 16px;
}
.big_box{
    position: relative;
    height: 771px;
    width: 71%;
    position: absolute;
    top: 123px;
    left: 506px;
    margin: auto;
    border-radius: 8px;
    opacity: 0.9;
}
.left_box{
    position: relative;
    height: 803px;
    width: 24%;
    position: absolute;
    top: 108px;
    left: 23px;
    overflow: auto;
    overflow-x: hidden;
}
.vueGallery .activePhoto {
    position: absolute;
    width: 96%;
    left:28px;
    top: 18px;
    height: 725px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 8px;
    position: relative;
}
.vueGallery .thumbnails {
    display: grid;
    width: 87%;
    position: absolute;
    top: 21px;
    left: 30px;
    grid-template-columns: repeat(auto-fill, minmax(329px, 1fr));
    grid-gap: 15px;
    height: 800px;
}
.vueGallery .thumbnails img{
  width: 100%;
}
/* 定义滚动条样式 */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  background-color: rgba(240, 240, 240, 1);
}
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0px rgba(240, 240, 240, .5);
  border-radius: 10px;
  background-color: rgba(240, 240, 240, .5);
}
 
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 0px rgba(240, 240, 240, .5);
  background-color: rgba(240, 240, 240, .5);
}
.vueGallery .thumbnails div {
  width: 100%;
  border: 2px solid #fff;
  cursor: pointer;
  
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 1;
  border-radius: 8px;
}
.vueGallery .thumbnails div:hover {
  opacity: 0.6;
}
.vueGallery .thumbnails div.active {
  outline-color: #5c4084;
  opacity: 1;
}
.big_back{
  width: 100pc;
  height: 600px;
}
.minimg_box {
  position: absolute;
  width: 600px;
  height: 600px;
}
</style>
<script>
export default {
    data(){
      return{
          note: {
          backgroundImage: "url(" + 'img/3-bg@2x.png' + ")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize:'100% 100%'
          },
          big_box: {
          backgroundImage: "url(" + 'img/3-right-place@2x.png' + ")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize:'100% 100%'
          },
          photos: [
      'img/ppt_01.jpg',
      'img/ppt_02.jpg',
      'img/ppt_03.jpg',
      'img/ppt_04.jpg',
      'img/ppt_05.jpg',
      'img/ppt_06.jpg',
      'img/ppt_07.jpg',
      'img/ppt_08.jpg',
      'img/ppt_09.jpg',
      'img/ppt_10.jpg',
      'img/ppt_11.jpg',
      'img/ppt_12.jpg',
      'img/ppt_13.jpg',
      'img/ppt_14.jpg',
      'img/ppt_15.jpg',
      'img/ppt_16.jpg',
      'img/ppt_17.jpg',
      'img/ppt_18.jpg',
      'img/ppt_19.jpg',
      'img/ppt_20.jpg',
      'img/ppt_21.jpg',
      'img/ppt_22.jpg',
      'img/ppt_23.jpg',
      'img/ppt_24.jpg',
      'img/ppt_25.jpg',
      'img/ppt_26.jpg',
      'img/ppt_27.jpg',
      'img/ppt_28.jpg',
      'img/ppt_29.jpg',
      'img/ppt_30.jpg',
      'img/ppt_31.jpg',
      'img/ppt_32.jpg',
      'img/ppt_33.jpg',
      'img/ppt_34.jpg',
      'img/ppt_35.jpg',
      'img/ppt_36.jpg',
      'img/ppt_37.jpg',
      'img/ppt_38.jpg',
      'img/ppt_39.jpg',
      'img/ppt_40.jpg',
    ],
    activePhoto: null
    }
  },
  mounted(){
    this.changePhoto(0)
    document.addEventListener("keydown", (event) => {
      if (event.which == 37)
        this.previousPhoto()
      if (event.which == 39)
        this.nextPhoto()
    })
  },
  methods :{
    changePhoto (index) {
      this.activePhoto = index
    },
    nextPhoto () {
      this.changePhoto( this.activePhoto+1 < this.photos.length ? this.activePhoto+1 : 0 )
    },
    previousPhoto () {
      this.changePhoto( this.activePhoto-1 >= 0 ? this.activePhoto-1 : this.photos.length-1 )
    }
  }
}
</script>
