import OrderService from "../services/OrderService.js";
import ProductService from "../services/ProductService.js";
import CouponService from "../services/CouponService.js";


class OrderController {
    async create(req, res) {
        try {
            const {customer_data, order_details} = req.body;
            let totalPrice = 0;
            for (let product of order_details) {
                const productPrice = await ProductService.getById(product.product_id);
                product.price = productPrice.price;
                totalPrice += product.price * product.quantity;
            }

            if (req.body.coupon) {
                const coupon = await CouponService.getByCode(req.body.coupon);
                if (coupon) {
                    const orderHistory = await OrderService.getByEmailAndPhone(customer_data.email, customer_data.phone);
                    if(orderHistory && orderHistory.length > 0){
                        for (let order of orderHistory) {
                            if (order.coupon === coupon.code) {
                                res.status(400).json({error: "Coupon already used"});
                                return;
                            }
                        }
                    }
                    totalPrice *= coupon.discount;
                }
            }

            const order = await OrderService.create({...req.body, total_price: Number(totalPrice.toFixed(2))});
            res.status(200).json(order);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    async getByEmailAndPhone(req, res) {
        try {
            const order = await OrderService.getByEmailAndPhone(req.body.email, req.body.phone);
            res.status(200).json(order);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    async getById(req, res) {
        try {
            const order = await OrderService.getById(req.params.id);
            res.status(200).json(order);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

}

export default new OrderController();
