import Product from "../models/Product.js";


class ProductService {
    async create(product) {
        const createdProduct = await Product.create(product);
        return createdProduct;
    }

    async getAllByShopId(id) {
        if (!id) {
            throw new Error("Shop id is required");
        }
        const products = await Product.find({shop_id: id});
        return products;
    }

    async getById(id) {
        if (!id) {
            throw new Error("Product id is required");
        }
        const product = await Product.findById(id);
        return product;
    }
}

export default new ProductService();
