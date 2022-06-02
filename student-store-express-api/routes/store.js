const express = require("express");
const Store = require("../models/store");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const products = await Store.listProducts();
    res.status(200).json({ products });
  } catch (err) {
    next(err);
  }
});
router.get("/purchases", async (req, res, next) => {
  try {
    const purchases = await Store.listPurchases();
    res.status(200).json({ purchases });
  } catch (err) {
    next(err);
  }
});
router.get("/purchases/:purchaseId", async (req, res, next) => {
  try {
    const purchaseId = req.params.purchaseId;

    const purchase = await Store.fetchPurchaseById(purchaseId);
    res.status(200).json({ purchase });
  } catch (err) {
    next(err);
  }
});

router.get("/:productId", async (req, res, next) => {
  try {
    const productId = req.params.productId;
    const product = await Store.fetchProductById(productId);
    res.status(200).json({ product });
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const cart = req.body.cart;
    const userInfo = req.body.userInfo;
    const purchase = await Store.purchaseProducts(cart, userInfo);
    res.status(200).json({ purchase, cart });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
