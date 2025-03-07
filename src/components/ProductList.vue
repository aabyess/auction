<template>
  <div>
    <!-- 🔥 인기 상품 (1열) -->
    <div class="popular-products">
      <h2>🔥 인기 상품</h2>
      <div class="popular-list">
        <ProductCard v-for="(product, index) in popularProducts" 
          :key="index" 
          :product="product"
          @click="goToDetail(product.id)"
        />
      </div>
    </div>

    <!-- 📦 일반 상품 리스트 -->
    <div class="product-list">
      <ProductCard v-for="(product, index) in regularProducts" 
        :key="index" 
        :product="product"
        @click="goToDetail(product.id)"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import { useRouter } from 'vue-router';


export default {
  components: {
    ProductCard
  },
  setup() {
    const router = useRouter();
    const goToDetail = (id) => {
      router.push(`/product/${id}`);
    };

    return { goToDetail };
  },
  data() {
    return {
      products: [
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
      ]
    };
  },
  computed: {
    popularProducts() {
      return this.products.filter(product => product.isPopular);
    },
    regularProducts() {
      return this.products.filter(product => !product.isPopular);
    }
  }
};
</script>

<style scoped>
/* 🔥 인기 상품 (1열) */
.popular-products {
  margin-bottom: 30px;
}

.popular-list {
  display: flex;
  overflow-x: auto;
  gap: 15px;
  padding: 10px;
}

.popular-list::-webkit-scrollbar {
  height: 8px;
}

.popular-list::-webkit-scrollbar-thumb {
  background-color: #ff9800;
  border-radius: 4px;
}

.popular-list::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* 📦 일반 상품 (2열 이상) */
.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 40px 0;
}
</style>
