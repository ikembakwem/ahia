const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter product name"],
    trim: true,
    maxLength: [80, "Product name should not exceed 80 Characters"],
  },

  price: {
    type: Number,
    required: [true, "Enter product price"],
    maxLength: [10, "Product price cannot 10 digits"],
    default: 0.0,
  },

  description: {
    type: String,
    required: [true, "Kindly enter the product description"],
  },

  ratings: {
    type: Number,
    default: 0,
  },

  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],

  category: {
    type: String,
    required: [true, "Select product category"],
    enum: {
      values: [
        "Electronics",
        "Fashion",
        "Health & Beauty",
        "Collectibles",
        "Sports",
        "Home and Garden",
        "Smartphones",
      ],
      message: "Please select the correct category for the product",
    },
  },

  seller: {
    type: String,
    required: [true, "Enter seller information"],
  },

  stock: {
    type: String,
    required: [true, "Enter product stock"],
    maxLength: [4, "Stock cannot exceed 9999"],
    default: 0,
  },

  numberOfReviews: {
    type: Number,
    default: 0,
  },

  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Products = mongoose.model("Product", productSchema);
module.exports = Products;
