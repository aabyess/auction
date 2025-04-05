<template>
  <div class="signup-container">
    <h2>회원가입</h2>
    <input v-model="email" type="email" placeholder="이메일" />
    <input v-model="password" type="password" placeholder="비밀번호" />
    <input v-model="name" type="text" placeholder="이름" />
    <input v-model="phone" type="text" placeholder="전화번호" />
    <button @click="signup">가입하기</button>
  </div>
</template>
  
  <script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
} from "firebase/auth"; // ✅ 올바른 import 추가
import { auth } from "../firebase/firebase";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore();

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const name = ref("");
    const phone = ref("");
    const router = useRouter();

    // 회원가입 처리
    const signup = async () => {
      if (password.value.length < 6) {
        alert("비밀번호는 최소 6자 이상이어야 합니다.");
        return;
      }

      try {
        console.log("회원가입 요청 시작...");

        // ✅ 이메일 중복 체크
        const signInMethods = await fetchSignInMethodsForEmail(
          auth,
          email.value
        );
        if (signInMethods.length > 0) {
          if (
            confirm("이미 가입된 이메일입니다. 로그인 페이지로 이동할까요?")
          ) {
            router.push("/login");
          }
          return;
        }

        // ✅ Firebase Authentication에 사용자 추가
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.value,
          password.value
        );
        const user = userCredential.user;

        console.log("Firestore에 사용자 정보 저장 중...");
        // ✅ Firestore에 사용자 정보 저장 (user.uid 사용)
        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          name: name.value,
          phone: phone.value,
          email: email.value,
        });

        alert("가입 완료!");
        router.push("/");
      } catch (error) {
        console.error("회원가입 실패: ", error.message);
        alert("회원가입 실패: " + error.message);
      }
    };

    return { email, password, name, phone, signup };
  },
};
</script>
  
  
  <style scoped>
.signup-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
}

.signup-container input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.signup-container button {
  width: 100%;
  padding: 10px;
  background: white;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
  