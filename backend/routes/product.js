const express = require("express");

const router = express.Router();

const { getProducts, newProduct } = require("../controllers/productController");

// All Products router
router.route("/products").get(getProducts);

// New Product router
router.route("/product/new").post(newProduct);

module.exports = router;
