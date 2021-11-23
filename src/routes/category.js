const express = require("express");
const { adminMiddleware, requireSignin } = require("../common-middleware");
const { getCategories, addCategory } = require("../controllers/category");

const router = express.Router();

router.post("/category/create", requireSignin, adminMiddleware, addCategory);
router.get("/category/getcategory", getCategories);

module.exports = router;