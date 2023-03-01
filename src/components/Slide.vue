<template>
  <div class="container-full">
    <swiper
      :direction="'vertical'"
      :slidesPerView="1"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      :loop="true"
      class="slider"
    >
      <swiper-slide class="slider-item"
        ><img src="../assets/img/slide.png" alt=""
      /></swiper-slide>
      <swiper-slide class="slider-item"
        ><img src="../assets/img/slide.png" alt=""
      /></swiper-slide>
      <swiper-slide class="slider-item"
        ><img src="../assets/img/slide.png" alt=""
      /></swiper-slide>
      <swiper-slide class="slider-item"
        ><img src="../assets/img/slide.png" alt=""
      /></swiper-slide>
      <swiper-slide class="slider-item"
        ><img src="../assets/img/slide.png" alt=""
      /></swiper-slide>
      <swiper-slide class="slider-item"
        ><img src="../assets/img/slide.png" alt=""
      /></swiper-slide>
      <swiper-slide class="slider-item"
        ><img src="../assets/img/slide.png" alt=""
      /></swiper-slide>
      <swiper-slide class="slider-item"
        ><img src="../assets/img/slide.png" alt=""
      /></swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>
<style lang="scss">
.swiper-pagination-bullet {
  background: transparent;
  width: 20px;
  height: 20px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: #fff;
    width: 7px;
    height: 7px;
  }
}

.swiper-pagination-bullet-active {
  width: 20px;
  height: 20px;
  border: 1px solid #ff6d39;
  background: transparent;
  &.swiper-pagination-bullet {
    position: relative;
    &::before {
      background: #ff6d39;
    }
  }
}
.swiper-pagination {
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.slider {
  width: 100%;
  height: 91vh;
  background: #ccc;
  margin-top: -47px;
  position: relative;
  z-index: 0;
  //    margin-left: 20px;
  &-item {
    height: max-content;
    background: #000;
    position: relative;
    cursor: pointer;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>