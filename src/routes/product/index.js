const express = require("express");
const createProduct = require("../../services/product/createProduct");
const getProducts = require("../../services/product/getProducts");
const router = express.Router();

router.post("/product", (req, res) => {
  createProduct(req, res);
});

router.get("/products", (req, res) => {
  getProducts(req, res);
});

router.get("/product/:id", (req, res) => {
  //   getUser(req, res);
});

router.put("product/:id");

module.exports = router;
