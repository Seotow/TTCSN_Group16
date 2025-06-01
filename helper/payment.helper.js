const crypto = require("crypto")
const axios = require("axios")


class PaymentHelper {

    createSignature = ({ orderCode, amount, description, cancelUrl, returnUrl }, checksumKey) => {

        console.log();

        const baseString = `amount=${amount}&cancelUrl=${cancelUrl}&description=${description}&orderCode=${orderCode}&returnUrl=${returnUrl}`;
        return crypto.createHmac('sha256', checksumKey).update(baseString).digest('hex');
    };

    async create_payment_link({ orderCode, amount, description, cancelUrl, returnUrl }, checksumKey = "86bd2d43a3648ed93871e3b636b061c9e1b79743dc907e50b92ca40607e066c9", x_client_id = "2e970a7d-4de1-419e-b3b2-d8f220c48bf2", x_api_key = "1238870f-7f36-4d92-a2cc-1bc8df36e403") {
        try {

            const signature = this.createSignature({ orderCode, amount, description, cancelUrl, returnUrl }, checksumKey);


            const response = await axios.post("https://api-merchant.payos.vn/v2/payment-requests", {
                orderCode,
                amount,
                description,
                cancelUrl,
                returnUrl,
                signature,
                expiredAt: Math.floor(Date.now() / 1000) + 600,
            }, {
                headers: {
                    'x-client-id': x_client_id,
                    'x-api-key': x_api_key
                }
            });
            return response.data;
        } catch (error) {
            console.error("Error when creating payment link:", error);
        }
    }
    async checkPayMent(transId, x_client_id = "2e970a7d-4de1-419e-b3b2-d8f220c48bf2", x_api_key = "1238870f-7f36-4d92-a2cc-1bc8df36e403") {
        try {

            return await axios.get(`https://api-merchant.payos.vn/v2/payment-requests/${transId}`, {
                headers: {
                    'x-client-id': x_client_id,
                    'x-api-key': x_api_key
                }
            })
                .then((res) => {
                    return res.data
                })

        } catch (error) {
            console.log("errr when checkPayMent", error);

        }
    }
}



module.exports = PaymentHelper

