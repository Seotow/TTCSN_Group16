const PaymentHelper = require("../helper/payment.helper");

let paymentHelper = new PaymentHelper()


class PaymentController {

    async createPaymentLink(req, res) {

        try {

            let { amount, description } = req.body

            if (!amount || !description) {
                res.status(400).json({
                    message: "missing data!"
                })
                return
            }

            let d = Date.now()
            let orderCode = Number(d.toString().slice(2) + Math.floor(Math.random() * Math.pow(10, Math.floor(Math.random() * 4))).toString());

            let returnUrl = "http://localhost:3000/paymentSuccess"
            let cancelUrl = "http://localhost:3000/dashBoard"


            let dataFromCreatePaymentLink = await paymentHelper.create_payment_link({ orderCode, amount, description, cancelUrl, returnUrl })

            if (!dataFromCreatePaymentLink?.data?.paymentLinkId) {
                return res.status(500).json({
                    message: "chưa thể khởi tạo giao dịch"
                })
            }

            return res.status(200).json({
                message: "ok",
                dataFromCreatePaymentLink
            })

        } catch (error) {

            console.log("err when createPaymentLink : ", error);
            return res.status(500).json({
                message: "haave wrong!"
            })


        }

    }

    async checkPayment(req, res) {

        try {
            let userId = req.decodeAccessToken.userId;
            let transId = req.body.transId

            if (!transId) {
                return res.status(400).json({
                    message: "not found your transaction!"
                })
            }

            let checkPayment = await paymentHelper.checkPayMent(transId)

            if (checkPayment?.data?.status != "PAID") {
                return res.status(400).json({
                    message: "thanh toán không thành công",
                    time: checkPayment?.data?.createdAt
                })
            }

            let paymention = await globalThis.connection.executeQuery(`select * from payment where userId = ? and transId = ?`, [userId, transId])
                .then((data) => {
                    return data[0]
                })
                .catch((e) => {
                    throw new Error(e)
                })

            if (paymention) {
                return res.status(400).json({
                    message: "đã thanh toán cho giao dịch này rồi!",
                })
            }

            //update code giao dich thanh cong tai day

            return res.status(200).json({
                message: "ok"
            })


        } catch (error) {
            console.log("err when check payment : ", error);
            return res.status(500).json({
                message: "have wrong!"
            })

        }

    }

}



module.exports = PaymentController
