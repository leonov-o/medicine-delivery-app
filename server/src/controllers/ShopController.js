import ShopService from "../services/ShopService.js";


class ShopController {
    async create(req, res) {
        try {
            const shop = await ShopService.create(req.body);
            res.status(200).json(shop);
        }catch (e) {
            res.status(500).json(e.message);
        }
    }
    async getAll(req, res) {
        try {
            const shop = await ShopService.getAll();
            res.status(200).json(shop);
        }catch (e) {
            res.status(500).json(e.message);
        }
    }

    async getById(req, res) {
        try {
            const shop = await ShopService.getById(req.params.id)
            res.status(200).json(shop);
        }catch (e) {
            res.status(500).json(e.message);
        }
    }
}


export default new ShopController();
