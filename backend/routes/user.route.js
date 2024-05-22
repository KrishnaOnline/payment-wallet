const express = require("express");
const router = express.Router();
const {signUp} = require("../controllers/user.controller");

router.post("/sign-up", signUp);

module.exports = router;