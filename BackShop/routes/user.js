const router = require('express').Router()

router.get("/usertest", (req, res) => {
    res.send("usertest is successfull")
})

// lh:5000/api/user/usertest

module.exports = router