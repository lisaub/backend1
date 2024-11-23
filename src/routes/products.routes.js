const express = require('express');
const router = express.Router();
const ProductManager = require('../managers/productManager');

const productManager = new ProductManager();

router.get('/', (req, res) => {
  const limit = req.query.limit;
  const products = productManager.getProducts(limit);
  res.json(products);
});

router.get('/:pid', (req, res) => {
  const product = productManager.getProductById(req.params.pid);
  res.json(product);
});

router.post('/', (req, res) => {
  const newProduct = productManager.addProduct(req.body);
  res.json(newProduct);
});

router.put('/:pid', (req, res) => {
  const updatedProduct = productManager.updateProduct(req.params.pid, req.body);
  res.json(updatedProduct);
});

router.delete('/:pid', (req, res) => {
  const deletedProduct = productManager.deleteProduct(req.params.pid);
  res.json(deletedProduct);
});

module.exports = router;
