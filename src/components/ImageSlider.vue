<template>
  <div class="slider-container">
    <div class="slider" :style="sliderStyle">
      <div class="slide" v-for="(image, index) in images" :key="index">
        <img :src="image" alt="슬라이드 이미지">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      images: [
        new URL('@/assets/images/banner1.png', import.meta.url).href,
        new URL('@/assets/images/banner2.png', import.meta.url).href,
        new URL('@/assets/images/banner3.png', import.meta.url).href
      ]
    };
  },
  computed: {
    sliderStyle() {
      return {
        transform: `translateX(-${this.currentIndex * 100}%)`,
        transition: 'transform 0.8s ease-in-out'
      };
    }
  },
  mounted() {
    this.startAutoSlide();
  },
  methods: {
    startAutoSlide() {
      setInterval(() => {
        this.nextSlide();
      }, 3000); // 3초마다 자동 슬라이드
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }
  }
};
</script>

<style scoped>
.slider-container {
  position: relative;
  width: 800px;
  height: 280px;
  overflow: hidden;
  margin: auto;
}

.slider {
  display: flex;
  transition: transform 0.8s ease-in-out;
}

.slide {
  min-width: 100%;
  box-sizing: border-box;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>