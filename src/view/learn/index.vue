<template>
  <div style="height: 100%; width: 100%;" class="note" :style="note">
    <div class="header">
      <!-- 头部-->
    </div>
    <div class="vueGallery">
      <!-- ppt部分 -->
      <div class="big_box" :style="big_box">
        <div class="activePhoto" :style="'background-image: url('+photos[activePhoto]+');'"></div>
      </div>
      <!--
    <div class="minimg_box">
      <div class="thumbnails">
        <ul>
          <li img 
           v-for="(photo, index) in photos"
            :src="photo"
            :key="index"
            @click="changePhoto(index)"
            :class="{'active': activePhoto == index}" :style="'background-image: url('+photo+')'"> 
        </li>
        </ul>
      </div>
      </div>-->
      <div class="left_box">
        <div class="thumbnails">
          <div
            v-for="(photo, index) in photos"
            :src="photo"
            :key="index"
            @click="changePhoto(index)"
            :class="{'active': activePhoto == index}"
            :style="'background-image: url('+photo+')'"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.note {
  position: absolute;
  top: 0px;
  left: 0px;
}
.big_box {
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
.left_box {
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
  width: 58%;
  left: 35%;
  padding-bottom: 42%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 2px solid #fff;
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
/* 定义滚动条样式 */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  background-color: rgba(240, 240, 240, 1);
}
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0px rgba(240, 240, 240, 0.5);
  border-radius: 10px;
  background-color: rgba(240, 240, 240, 0.5);
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 0px rgba(240, 240, 240, 0.5);
  background-color: rgba(240, 240, 240, 0.5);
}
.vueGallery .thumbnails div {
  width: 100%;
  border: 2px solid #fff;
  cursor: pointer;
  padding-bottom: 45%;
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
.big_back {
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
  data() {
    return {
      note: {
        backgroundImage: "url(" + "img/3-bg@2x.png" + ")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
      },
      big_box: {
        backgroundImage: "url(" + "img/3-right-place@2x.png" + ")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
      },
      photos: [
        "img/2020.7.15-基础知识_01.jpg",
        "img/2020.7.15-基础知识_02.jpg",
        "img/2020.7.15-基础知识_03.jpg",
        "img/2020.7.15-基础知识_04.jpg",
        "img/2020.7.15-基础知识_05.jpg",
        "img/2020.7.15-基础知识_06.jpg",
        "img/2020.7.15-基础知识_07.jpg",
        "img/2020.7.15-基础知识_08.jpg",
        "img/2020.7.15-基础知识_09.jpg",
        "img/2020.7.15-基础知识_10.jpg",
        "img/2020.7.15-基础知识_11.jpg",
        "img/2020.7.15-基础知识_12.jpg",
        "img/2020.7.15-基础知识_13.jpg",
        "img/2020.7.15-基础知识_14.jpg",
        "img/2020.7.15-基础知识_15.jpg",
        "img/2020.7.15-基础知识_16.jpg",
        "img/2020.7.15-基础知识_17.jpg",
        "img/2020.7.15-基础知识_18.jpg",
        "img/2020.7.15-基础知识_19.jpg",
        "img/2020.7.15-基础知识_20.jpg",
        "img/2020.7.15-基础知识_21.jpg",
        "img/2020.7.15-基础知识_22.jpg",
        "img/2020.7.15-基础知识_23.jpg",
        "img/2020.7.15-基础知识_24.jpg",
        "img/2020.7.15-基础知识_25.jpg",
        "img/2020.7.15-基础知识_26.jpg",
        "img/2020.7.15-基础知识_27.jpg",
        "img/2020.7.15-基础知识_28.jpg",
        "img/2020.7.15-基础知识_29.jpg",
        "img/2020.7.15-基础知识_30.jpg",
        "img/2020.7.15-基础知识_31.jpg",
        "img/2020.7.15-基础知识_32.jpg",
        "img/2020.7.15-基础知识_33.jpg",
        "img/2020.7.15-基础知识_34.jpg",
        "img/2020.7.15-基础知识_35.jpg",
        "img/2020.7.15-基础知识_36.jpg",
        "img/2020.7.15-基础知识_37.jpg",
        "img/2020.7.15-基础知识_38.jpg",
        "img/2020.7.15-基础知识_39.jpg",
        "img/2020.7.15-基础知识_40.jpg",
      ],
      activePhoto: null,
    };
  },
  mounted() {
    this.changePhoto(0);
    document.addEventListener("keydown", (event) => {
      if (event.which == 37) this.previousPhoto();
      if (event.which == 39) this.nextPhoto();
    });
  },
  methods: {
    changePhoto(index) {
      this.activePhoto = index;
    },
    nextPhoto() {
      this.changePhoto(
        this.activePhoto + 1 < this.photos.length ? this.activePhoto + 1 : 0
      );
    },
    previousPhoto() {
      this.changePhoto(
        this.activePhoto - 1 >= 0
          ? this.activePhoto - 1
          : this.photos.length - 1
      );
    },
  },
};
</script>
