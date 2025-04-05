<template>
  <nav class="navbar">
    <div class="logo">Auction</div>
    <ul class="nav-links">
      <li><a href="#">홈</a></li>
      <li><a href="#">거래</a></li>
      <li><a href="#">채팅</a></li>
      <li><a href="#">내 정보</a></li>
      <li v-if="!user">
        <button @click="toggleLogin" class="login-btn">로그인</button>
      </li>
      <li v-else>
        <span class="welcome-message">{{ userName }}님 환영합니다!</span>
        <button @click="logout" class="logout-btn">로그아웃</button>
      </li>
    </ul>
  </nav>

  <!-- 로그인 팝업 -->
  <transition name="fade">
    <div v-if="isLoginVisible" class="login-popup">
      <div class="login-content">
        <h2>로그인</h2>
        <input v-model="email" type="email" placeholder="이메일" />
        <input v-model="password" type="password" placeholder="비밀번호" />
        <button @click="login">로그인</button>
        <button @click="toggleLogin" class="close-btn">닫기</button>
        <p class="signup-link" @click="goToSignup">지금 바로 가입하기!</p>
      </div>
    </div>
  </transition>

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
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase"; // ✅ `firebase.js`를 올바르게 가져옴
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore();

export default {
  setup() {
    const isLoginVisible = ref(false);
    const email = ref("");
    const password = ref("");
    const user = ref(null);
    const userName = ref("");
    const router = useRouter();

    // 로그인 팝업 토글
    const toggleLogin = () => {
      isLoginVisible.value = !isLoginVisible.value;
    };

    // Firebase 로그인 처리
    const login = async () => {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
        user.value = userCredential.user;
        alert("로그인 성공!");
        toggleLogin(); // 로그인 성공 후 팝업 닫기

        // ✅ Firestore에서 사용자 정보 가져오기
        const userDoc = await getDoc(doc(db, "users", user.value.uid));
        if (userDoc.exists()) {
          userName.value = userDoc.data().name; // 저장된 사용자 이름 불러오기
        }
      } catch (error) {
        alert("로그인 실패: " + error.message);
      }
    };

    // Firebase 로그아웃 처리
    const logout = async () => {
      await signOut(auth);
      user.value = null;
      userName.value = "";
      alert("로그아웃 되었습니다.");
    };

    // Firebase 인증 상태 감지 (자동 로그인 유지)
    onMounted(() => {
      onAuthStateChanged(auth, async (currentUser) => {
        user.value = currentUser;
        if (currentUser) {
          // ✅ Firestore에서 사용자 정보 가져오기
          const userDoc = await getDoc(doc(db, "users", currentUser.uid));
          if (userDoc.exists()) {
            userName.value = userDoc.data().name;
          }
        }
      });
    });

    // 회원가입 페이지로 이동
    const goToSignup = () => {
      toggleLogin();
      router.push("/signup");
    };

    return { isLoginVisible, toggleLogin, email, password, login, logout, user, userName };
  },
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style>
/* 필요한 스타일 추가 가능 */
</style>
