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
      ],
    },
  },
});

const Products = mongoose.model("Product", productSchema);
module.exports = Products;
