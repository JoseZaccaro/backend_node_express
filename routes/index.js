const router = require('express').Router()
const authRouter = require('./authRouter');


router.get("/", (req, res) => {
    res.send("Hello world")
});
router.use("/auth", authRouter);
router.use("/bussiness", authRouter);

module.exports = router;