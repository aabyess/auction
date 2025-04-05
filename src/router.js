import { createRouter, createWebHistory } from "vue-router";
import Home from "./Home.vue"; // 기본 페이지
import ProductDetail from './components/ProductDetail.vue';
import ChatComponent from "./components/ChatComponent.vue";
import Profile from "./components/Profile.vue"; // ✅ 추가
import Trade  from "./components/Trade.vue";
import Signup from "./components/Signup.vue"; // ✅ 회원가입 페이지 추가

const routes = [
  { path: "/", component: Home }, // 홈 페이지
  { path: '/product/:id', component: ProductDetail, props: true }, // 상세 페이지
  { path: "/chat", component: ChatComponent }, // ✅ 채팅 페이지 추가!
  { path: "/profile", component: Profile }, // ✅ 내 정보 페이지 추가
  { path: "/trade", component: Trade },  // ✅ 거래 페이지 추가
  { path: "/signup", component: Signup }, // ✅ 회원가입 페이지 라우트 추가
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
