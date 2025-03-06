<template>
    <div class="categories-container">
      <div class="category-box" v-for="(category, index) in categories" :key="index">
        <img :src="category.image" :alt="category.name" class="category-image" />
        <p>{{ category.name }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        categories: [
        { name: "디지털기기", image: new URL('@/assets/images/iphone.png', import.meta.url).href },
        { name: "생활가전", image: new URL('@/assets/images/mac.png', import.meta.url).href },
        { name: "기구/인테리어", image: new URL('@/assets/images/gagu.jpg', import.meta.url).href },
        { name: "생활/주방", image: new URL('@/assets/images/nambe.jpg', import.meta.url).href },
        { name: "유아동", image: new URL('@/assets/images/kid.png', import.meta.url).href },
        { name: "유아도서", image: new URL('@/assets/images/book.png', import.meta.url).href },
        { name: "여성의류", image: new URL('@/assets/images/girl.png', import.meta.url).href }
      ]
      };
    }
  };
  </script>
  
  <style scoped>
  .categories-container {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin: 20px 0;
    flex-wrap: wrap;
  }
  
  .category-box {
    background-color: #f8f9fa;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-size: 16px;
    font-weight: bold;
    color: #333;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
    width: 150px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .category-box:hover {
    background-color: #63B8FF;
    color: white;
    transform: scale(1.05);
  }
  
  .category-image {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 10px;
    
  }
  </style>
  