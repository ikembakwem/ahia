// Import product model
const Product = require("../models/product");

// Create new product => api/v1/product/new
exports.newProduct = async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
};

// Get all the products from the database => api/v1/products
exports.getProducts = async (req, res, next) => {
  const products = await Product.find();

  res.status(200).json({
    success: true,
    count: products.length,
    products,
  });
};

// Get specific product by it's id => api/v1/product/:id
exports.getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    res.status(200).json({
      success: true,
      product,
    });
    console.log(`Product with id: ${req.params.id} was successfully found!`);
  } catch (err) {
    console.log(`Product with id: ${req.params.id} was not found!`);
    return res.status(404).json({
      success: false,
      message: "Product doeas not exist!",
    });
  }
};

exports.updateProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({
      success: true,
      message: "Product you are trying to update does not exist",
    });
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    product,
  });
};

exports.deleteProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({
      success: true,
      message: "Product you are trying to delete does not exist",
    });
  }

  await product.remove();
  res.status(200).json({
    success: true,
    message: "Product deleted successfully",
  });
};
