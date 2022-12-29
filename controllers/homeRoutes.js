const router = require('express').Router();
const auth = require("../utils/auth")

router.get("/", async (req, res) => {
   res.render("homepage")
})

// login
router.get("/login", (req, res) => {
   res.render("login");
})

// sign up
router.get("/signUp", (req, res) => {
   res.render("signUp");
})
module.exports = router;
