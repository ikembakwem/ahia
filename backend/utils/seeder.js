// Import product model
const Product = require("../models/product");

// Configure enviroments variables
require("dotenv").config();

// Configure database connections
const db = require("../config/db");

// JSON products files
const products = require("../data/product.json");

const PORT = process.env.PORT;
const DB_HOST = process.env.DB_HOST;

// Connect to database
db.connect(DB_HOST);

// Seeder function
const seedMyProducts = async () => {
  try {
    console.log("Deleting products from database...");
    await Product.deleteMany();

    console.log("Products deleted successfully");

    await Product.insertMany(products);
    console.log("Products seeded to database successfully ");

    process.exit();
  } catch (err) {
    console.log(err.message);
    process.exit();
  }
};

seedMyProducts();
