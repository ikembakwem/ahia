const express = require("express");

const router = express.Router();

const {
  getProducts,
  newProduct,
  getProductByID,
} = require("../controllers/productController");

// All Products router
router.route("/products").get(getProducts);

// New Product router
router.route("/product/new").post(newProduct);

// Product by id router
router.route("/product/:id").get(getProductByID);

module.exports = router;
