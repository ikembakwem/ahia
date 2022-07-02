const express = require("express");

const router = express.Router();

const {
  getProducts,
  newProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

// All Products router
router.route("/products").get(getProducts);

// Product by id router
router.route("/product/:id").get(getProduct);

// Admin route for modifying and deleting a product
router.route("/admin/product/:id").put(updateProduct).delete(deleteProduct);

// Admin route to add new Product
router.route("/admin/product/new").post(newProduct);

module.exports = router;
