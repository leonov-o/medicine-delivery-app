import Order from "../models/Order.js";


class OrderService {
    async create(order) {
        const maxOrderId = await Order.find().sort({ order_id: -1 }).limit(1);
        const createdOrder = await Order.create({...order, order_id: maxOrderId[0].order_id + 1});
        return createdOrder;
    }


    async getByEmailAndPhone(email, phone) {
        if(!email || !phone) {
            throw new Error('Email and phone are required');
        }
        const order = await Order.find({"customer_data.phone": phone, "customer_data.email": email});
        return order;
    }

    async getById(id) {
        if(!id) {
            throw new Error('Id is required');
        }
        const order = await Order.find({order_id: id});
        return order;
    }
}


export default new OrderService();
