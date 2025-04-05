<template>
    <div class="chat-container">
      <div class="messages">
        <div v-for="message in messages" :key="message.id" class="message">
          <strong>{{ message.user }}:</strong> {{ message.text }}
        </div>
      </div>
      <input v-model="newMessage" placeholder="메시지를 입력하세요..." />
      <button @click="sendChatMessage">전송</button>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  import { sendMessage, listenForMessages } from "../services/chatService"; // Firestore 연동
  
  export default {
    setup() {
      const messages = ref([]);
      const newMessage = ref("");
      const user = "사용자1"; // 실제 서비스에서는 Firebase Auth로 사용자 정보 가져오기
  
      // Firestore에서 실시간 채팅 메시지 가져오기
      onMounted(() => {
        listenForMessages((msgs) => {
          messages.value = msgs;
        });
      });
  
      // 채팅 메시지 전송
      const sendChatMessage = async () => {
        if (newMessage.value.trim() !== "") {
          await sendMessage(user, newMessage.value);
          newMessage.value = ""; // 입력창 비우기
        }
      };
  
      return { messages, newMessage, sendChatMessage };
    },
  };
  </script>
  
  <style scoped>
  .chat-container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
  }
  .messages {
    max-height: 300px;
    overflow-y: auto;
    margin-bottom: 10px;
  }
  .message {
    padding: 5px;
    border-bottom: 1px solid #eee;
  }
  </style>
  