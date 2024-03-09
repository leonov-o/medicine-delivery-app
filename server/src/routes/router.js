import Router from "express";
import ShopController from "../controllers/ShopController.js";
import ProductController from "../controllers/ProductController.js";
import OrderController from "../controllers/OrderController.js";
import CouponController from "../controllers/CouponController.js";

const router = new Router();

router.post("/shops", ShopController.create)
router.get("/shops", ShopController.getAll)
router.get("/shops/:id", ShopController.getById)

router.post("/products", ProductController.create)
router.get("/shops/:id/products", ProductController.getAllByShopId)
router.get("/products/:id", ProductController.getById)

router.post("/order", OrderController.create)
router.post("/orders", OrderController.getByEmailAndPhone)
router.get("/orders/:id", OrderController.getById)

router.post("/coupons", CouponController.create)
router.get("/coupons", CouponController.getAll)
router.get("/coupons/:code", CouponController.getByCode)

export default router;
