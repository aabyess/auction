const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const KAKAO_ADMIN_KEY = process.env.KAKAO_ADMIN_KEY;

app.get('/', (req, res) => {
    res.send('🚀 카카오페이 서버가 정상 작동 중입니다!');
});

app.post('/api/payment', async (req, res) => {
    try {
        const { product_name, price } = req.body;

        const FRONTEND_URL = 'http://localhost:5173';
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
        res.status(500).json({ 
            message: '결제 요청 실패', 
            error: error.response ? error.response.data : error.message 
        });
    }
});

app.listen(5000, () => console.log('✅ 서버 실행됨! 포트: 5000'));
