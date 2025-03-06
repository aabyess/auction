<template>
    <div class="product-card">
      <img :src="product.image" :alt="product.name" class="product-image" />
      <h3>{{ product.name }}</h3>
      <p class="product-price">{{ product.price }}원</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: Object
    }
  };
  </script>
  
  <style scoped>
  .product-card {
    width: 200px;
    padding: 15px;
    border-radius: 8px;
    background: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.2s;
  }
  
  .product-card:hover {
    transform: scale(1.05);
  }
  
  .product-image {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
  }
  
  .product-price {
    color: #ff7e36;
    font-weight: bold;
  }
  </style>
  