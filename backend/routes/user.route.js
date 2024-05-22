const express = require("express");
const router = express.Router();
const {signUp, logIn, getBySearch, getBalance} = require("../controllers/user.controller");
const { authZ } = require("../middlewares/auth.middleware");

router.post("/signup", signUp);
router.post("/login", logIn);
router.get("/search-results", authZ, getBySearch);
router.get("/balance", authZ, getBalance);

module.exports = router;