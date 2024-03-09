import OrderService from "../services/OrderService.js";
import ProductService from "../services/ProductService.js";


class OrderController {
    async create(req, res) {
        try {
            const {order_details} = req.body;
            let totalPrice = 0;
            for (let product of order_details) {
                const productPrice = await ProductService.getById(product.product_id);
                product.price = productPrice.price;
                totalPrice += product.price * product.quantity
            }
            const order = await OrderService.create({...req.body, total_price: totalPrice});
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
