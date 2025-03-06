<template>
  <nav class="navbar">
    <div class="logo">Auction</div>
    <ul class="nav-links">
      <li><a href="#">홈</a></li>
      <li><a href="#">거래</a></li>
      <li><a href="#">채팅</a></li>
      <li><a href="#">내 정보</a></li>
    </ul>
    <button class="menu-btn" @click="toggleMenu">☰</button>
  </nav>
  <div v-if="isMenuOpen" class="mobile-menu">
    <ul>
      <li><a href="#">홈</a></li>
      <li><a href="#">거래</a></li>
      <li><a href="#">채팅</a></li>
      <li><a href="#">내 정보</a></li>
    </ul>
  </div>
  
  <router-view />

  <footer class="footer">
    <div class="footer-links">
      <a href="#">회사 소개</a>
      <a href="#">이용 약관</a>
      <a href="#">개인정보 처리방침</a>
      <a href="#">고객센터</a>
    </div>
    <div class="footer-info">
      <p>© 2024 중고거래 플랫폼. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
import "@/assets/main.css";

export default {
  data() {
    return {
      isMenuOpen: false,
      
    };
  },
  components: {},
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style>
</style>
