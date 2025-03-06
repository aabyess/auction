<template>
  <div>
    <ImageSlider />
    <PopularCategories />
    <ProductList />
  </div>
</template>
  
  <script>
import "@/assets/main.css";
import ImageSlider from "./components/ImageSlider.vue";
import PopularCategories from "./components/Categories.vue";
import ProductList from "./components/ProductList.vue";

export default {
  components: {
    ImageSlider,
    PopularCategories,
    ProductList,
  },
};
</script>
  