import { collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase/firebase"; // Firestore 불러오기

// ✅ 채팅 메시지 Firestore에 저장
export async function sendMessage(user, text) {
  try {
    await addDoc(collection(db, "chats"), {
      user: user,
      text: text,
      timestamp: serverTimestamp(),
    });
    console.log("📨 메시지 전송 완료!");
  } catch (error) {
    console.error("❌ 메시지 전송 중 오류 발생:", error);
  }
}

// ✅ 실시간 채팅 메시지 가져오기
export function listenForMessages(callback) {
  const q = query(collection(db, "chats"), orderBy("timestamp"));

  return onSnapshot(q, (snapshot) => {
    const messages = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(messages); // 받은 메시지를 콜백 함수에 전달
  });
}
