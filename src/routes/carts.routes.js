const express = require('express');
const router = express.Router();
const CartManager = require('../managers/cartManager');

const cartManager = new CartManager();

router.post('/', (req, res) => {
  const newCart = cartManager.createCart();
  res.json(newCart);
});

router.get('/:cid', (req, res) => {
  const cart = cartManager.getCartById(req.params.cid);
  res.json(cart);
});

router.post('/:cid/product/:pid', (req, res) => {
  const updatedCart = cartManager.addProductToCart(req.params.cid, req.params.pid);
  res.json(updatedCart);
});

module.exports = router;
