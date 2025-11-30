import ProductService from "../services/ProductService.js";

export default {
  async index(req, res) {
    const products = await ProductService.getAll();
    return res.json(products);
  },

  async show(req, res) {
    const product = await ProductService.getById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    return res.json(product);
  },

  async store(req, res) {
    const product = await ProductService.create(req.body);
    return res.status(201).json(product);
  },

  async update(req, res) {
    try {
      const product = await ProductService.update(req.params.id, req.body);
      return res.json(product);
    } catch (err) {
      return res.status(404).json({ message: "Product not found" });
    }
  },

  async destroy(req, res) {
    try {
      await ProductService.delete(req.params.id);
      return res.json({ message: "Product deleted" });
    } catch (err) {
      return res.status(404).json({ message: "Product not found" });
    }
  }
};
