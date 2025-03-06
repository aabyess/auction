<template>
    <div v-if="product" class="product-detail">
      <img :src="product.image" :alt="product.name" class="product-image" />
      <h2>{{ product.name }}</h2>
      <p class="price">💰 가격: {{ product.price }} 원</p>
      <button @click="goBack">🔙 뒤로 가기</button>
    </div>
    <div v-else>
      <p>상품 정보를 불러올 수 없습니다.</p>
    </div>
  </template>
  
  <script>
  import { useRoute, useRouter } from 'vue-router';
  
  export default {
    setup() {
      const route = useRoute();
      const router = useRouter();
  
      // 더미 데이터 (실제 프로젝트에서는 API에서 가져올 수도 있음)
      const products = [
      { id: 1, name: "아이폰 12", price: "500,000", image: new URL('@/assets/images/iphone.png', import.meta.url).href, isPopular: true },
        { id: 2, name: "갤럭시 S22", price: "600,000", image: new URL('@/assets/images/mac.png', import.meta.url).href, isPopular: false },
        { id: 3, name: "맥북 프로", price: "1,500,000", image: new URL('@/assets/images/pad.png', import.meta.url).href, isPopular: true },
        { id: 4, name: "아이패드 에어", price: "700,000", image: new URL('@/assets/images/vr.png', import.meta.url).href, isPopular: true },
        { id: 5, name: "애플워치", price: "400,000", image: new URL('@/assets/images/watch.png', import.meta.url).href, isPopular: false },
        { id: 6, name: "갤럭시 버즈", price: "150,000", image: new URL('@/assets/images/airpod.png', import.meta.url).href, isPopular: false },
        { id: 7, name: "아이폰 12", price: "500,000", image: new URL('@/assets/images/iphone.png', import.meta.url).href, isPopular: true },
        { id: 8, name: "갤럭시 S22", price: "600,000", image: new URL('@/assets/images/mac.png', import.meta.url).href, isPopular: false },
        { id: 9, name: "맥북 프로", price: "1,500,000", image: new URL('@/assets/images/pad.png', import.meta.url).href, isPopular: true },
        { id: 10, name: "아이패드 에어", price: "700,000", image: new URL('@/assets/images/vr.png', import.meta.url).href, isPopular: true },
        { id: 11, name: "애플워치", price: "400,000", image: new URL('@/assets/images/watch.png', import.meta.url).href, isPopular: false },
        { id: 12, name: "갤럭시 버즈", price: "150,000", image: new URL('@/assets/images/airpod.png', import.meta.url).href, isPopular: false }
      ];
  
      // URL에서 상품 ID 가져오기
      const productId = Number(route.params.id);
      const product = products.find(p => p.id === productId);
  
      const goBack = () => {
        router.push("/");
      };
  
      return { product, goBack };
    }
  };
  </script>
  
  <style scoped>
  .product-detail {
    text-align: center;
    margin-top: 40px;
  }
  
  .product-image {
    width: 300px;
    height: auto;
  }
  
  .price {
    font-size: 20px;
    font-weight: bold;
    color: #ff5722;
  }
  
  button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #ff9800;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  