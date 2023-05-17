// commonjs no require extension
const router = require('express').Router()
const { getAllUsers, signup, signin } = require('../controllers/authController')
const { accountExistsSignup, accountExistsSignin, isVerified, verifyPassword } = require('../middlewares/auth');

router.get("/", (req, res, next) => {
    res.send("Ruta get de authRouter")
});

router.get("/all", getAllUsers)

router.post('/signup', accountExistsSignup, signup);
router.post('/signin', accountExistsSignin, isVerified, verifyPassword, signin);


module.exports = router;