import Coupon from "../models/Coupon.js";


class CouponService {
    async create(coupon) {
        const newCoupon = await Coupon.create(coupon);
        return newCoupon;
    }

    async getAll() {
        const coupons = await Coupon.find({});
        return coupons;
    }

    async getByCode(code) {
        if (!code) {
            throw new Error("Coupon code is required");
        }
        const coupon = await Coupon.findOne({code: code});
        return coupon;
    }
}

export default new CouponService();
