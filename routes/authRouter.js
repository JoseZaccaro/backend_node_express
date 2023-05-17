const router = require('express').Router()
const { getAllUsers } = require('../controllers/authController')

router.get("/", (req, res, next) => {
    res.send("Ruta get de authRouter")
});

router.get("/all", getAllUsers)


module.exports = router;