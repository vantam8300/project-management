const router = require('express').Router();
const auth = require("../utils/auth")

router.get("/", async (req, res) => {
   res.send("aa")
})

module.exports = router;
