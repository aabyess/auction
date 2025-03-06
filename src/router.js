import { createRouter, createWebHistory } from "vue-router";
import Home from "./Home.vue"; // 기본 페이지
import ProductDetail from './components/ProductDetail.vue';

const routes = [
  { path: "/", component: Home }, // 홈 페이지
  { path: '/product/:id', component: ProductDetail, props: true } // 상세 페이지
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
