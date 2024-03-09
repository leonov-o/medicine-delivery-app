import CouponService from "../services/CouponService.js";


class CouponController {
    async create(req, res) {
        try {
            const coupon = await CouponService.create(req.body);
            res.status(200).json(coupon);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    async getAll(req, res) {
        try {
            const coupons = await CouponService.getAll();
            res.status(200).json(coupons);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    async getByCode(req, res) {
        try {
            const coupon = await CouponService.getByCode(req.params.code);
            res.status(200).json(coupon);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
}

export default new CouponController();
