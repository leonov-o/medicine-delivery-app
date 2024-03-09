import Shop from "../models/Shop.js";

class ShopService {
    async create(shop) {
        const createdShop = await Shop.create(shop);
        return createdShop;
    }

    async getAll() {
        const shops = await Shop.find({});
        return shops;
    }

    async getById(id) {
        if (!id) {
            throw new Error("Shop id is required");
        }
        const shop = await Shop.findById(id);
        return shop;
    }
}

export default new ShopService();
