const fs = require('fs');
const path = require('path');

class ProductManager {
  constructor() {
    this.filePath = path.join(__dirname, 'data', 'products.json');
  }

  getProducts(limit) {
    const products = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));
    return limit ? products.slice(0, limit) : products;
  }

  getProductById(id) {
    const products = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));
    return products.find(product => product.id === id);
  }

  addProduct(product) {
    const products = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));
    product.id = products.length ? products[products.length - 1].id + 1 : 1;
    products.push(product);
    fs.writeFileSync(this.filePath, JSON.stringify(products, null, 2));
    return product;
  }

  updateProduct(id, updatedProduct) {
    const products = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));
    const index = products.findIndex(product => product.id === id);
    if (index !== -1) {
      products[index] = { ...products[index], ...updatedProduct };
      fs.writeFileSync(this.filePath, JSON.stringify(products, null, 2));
      return products[index];
    }
    return null;
  }

  deleteProduct(id) {
    const products = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));
    const index = products.findIndex(product => product.id === id);
    if (index !== -1) {
      const deletedProduct = products.splice(index, 1);
      fs.writeFileSync(this.filePath, JSON.stringify(products, null, 2));
      return deletedProduct;
    }
    return null;
  }
}

module.exports = ProductManager;
