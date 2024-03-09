import ProductService from "../services/ProductService.js";

class ProductController {
    async create(req, res) {
        try {
            const product = await ProductService.create(req.body, req.files.image);
            res.status(200).json(product);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    async getAllByShopId(req, res) {
        try {
            const product = await ProductService.getAllByShopId(req.params.id);
            res.status(200).json(product);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    async getById(req, res) {
        try {
            const product = await ProductService.getById(req.params.id)
            res.status(200).json(product);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
}

export default new ProductController();
