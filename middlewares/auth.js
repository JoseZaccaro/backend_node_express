const User = require('../database/models/User.js');
const bcryptjs = require('bcryptjs');

const authMiddlewares = {

    accountExistsSignup: async (req, res, next) => {
        try {
            // console.log(req.body)

            const user = await User.findOne({email: req.body.email});

            if (user) {
                return res.status(400).json({
                    message: 'Usuario ya existe'
                })
            }

            return next()

        } catch (err) {
            next(err)
        }
    },
    accountExistsSignin: async (req, res, next) => {
        try {
            
            const user = await User.findOne({email: req.body.email});

            if(user) {
                req.user = {
                    id: user._id,
                    email: user.email,
                    photo: user.photo,
                    password: user.password,
                    role: user.role,
                    is_verified: user.is_verified,
                }

                return next();
            }

            return res.status(400).json({
                message: 'Usuario no existe, por favor registrate'
            })

        } catch (err) {
            next(err)
        }
    },
    isVerified: async (req, res, next) => {
        if(req.user.is_verified) {
            return next() // Ya verifico su email
        }

        return res.status(400).json({
            message: 'Por favor verifica tu email'
        })
    },
    verifyPassword: async (req, res, next) => {
        const dbPassword = req.user.password;
        const formPassword = req.body.password;

        const passwordOk = bcryptjs.compareSync(formPassword, dbPassword);

        if(passwordOk) {
            return next()
        }

        return res.status(400).json({
            message: 'Todo mal, credenciales incorrectas'
        })
    }

};

module.exports = authMiddlewares;