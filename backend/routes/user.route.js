const express = require("express");
const router = express.Router();
const {signUp, logIn, getBySearch} = require("../controllers/user.controller");
const { authZ } = require("../middlewares/auth.middleware");

router.post("/signup", signUp);
router.post("/login", logIn);
router.get("/search-results", authZ, getBySearch);

module.exports = router;