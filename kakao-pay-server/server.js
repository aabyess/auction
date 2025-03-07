const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config(); // .env 파일 사용

const app = express(); // ✅ 여기서 app을 정의해야 오류 해결됨!

app.use(cors()); // CORS 해결
app.use(express.json()); // JSON 파싱

const KAKAO_ADMIN_KEY = process.env.KAKAO_ADMIN_KEY; // .env에서 API 키 가져오기

// ✅ 루트 경로('/')
app.get('/', (req, res) => {
    res.send('🚀 카카오페이 서버가 정상 작동 중입니다!');
});

// ✅ 결제 요청 API
app.post('/api/payment', async (req, res) => {
    try {
        const { product_name, price } = req.body;
        console.log("🟢 서버에서 받은 결제 요청:", product_name, price);

        const FRONTEND_URL = 'http://localhost:5173'; // ✅ 프론트엔드 도메인 확인
        const approvalUrl = `${FRONTEND_URL}/payment-success`;
        const cancelUrl = `${FRONTEND_URL}/payment-cancel`;
        const failUrl = `${FRONTEND_URL}/payment-fail`;

        const response = await axios.post(
            'https://kapi.kakao.com/v1/payment/ready',
            {
                cid: 'TC0ONETIME',
                partner_order_id: 'order_id_1234',
                partner_user_id: 'user_1234',
                item_name: product_name,
                quantity: 1,
                total_amount: price,
                tax_free_amount: 0,
                approval_url: approvalUrl,
                cancel_url: cancelUrl,
                fail_url: failUrl
            },
            {
                headers: {
                    Authorization: `KakaoAK ${KAKAO_ADMIN_KEY}`,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        );

        res.json({ next_redirect_pc_url: response.data.next_redirect_pc_url });
    } catch (error) {
        console.error("❌ 결제 요청 실패!");

        if (error.response) {
            console.error("🔴 상태 코드:", error.response.status);
            console.error("🟡 응답 데이터:", error.response.data);
        } else {
            console.error("🔵 일반 에러:", error.message);
        }

        res.status(500).json({ 
            message: '결제 요청 실패', 
            error: error.response ? error.response.data : error.message 
        });
    }
});

// ✅ 서버 실행
app.listen(5000, () => console.log('✅ 서버 실행됨! 포트: 5000'));

console.log("🔑 KAKAO_ADMIN_KEY:", KAKAO_ADMIN_KEY); // 콘솔에 출력
