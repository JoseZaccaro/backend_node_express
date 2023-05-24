const User = require('../database/models/User.js');
const bcryptjs = require('bcryptjs');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const authController = {

    getAllUsers: async (req, res, next) => {
        try {
            // let user;
            // console.log(req.query)
            // if (req.query.id) {
            //     console.log("Estoy en el if");
            //     user = await User.findOne({ _id: req.query.id });
            // } else {

            //     console.log("Estoy en el else");
            //     user = await User.find();
            // }

            // throw new Error("Fallé a proposito xd")
            // res.status(200).json({
            //     data: user,
            //     success: true,
            // })

            const users = await User.find();

            if(users.length < 0) {
                return res.status(404).json({
                    message: 'users not found'
                });
            }

            return res.status(200).json({
                users
            });


        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                data: null,
                success: false,
                error: error.message,
                status: 500
            })
        }
    },
    signup: async (req, res, next) => {
        try {
            req.body.photo = 'fdsaf';
            req.body.role = 0;
            req.body.is_online = false;
            req.body.is_verified = false;

            req.body.verify_code = crypto.randomBytes(10).toString('hex');

            req.body.password = bcryptjs.hashSync(req.body.password, 10)


            const user = await User.create(req.body);

            return res.status(201).json({
                message: 'Usuario creado correctamente',
                user
            })

        } catch (err) {
            next(err)
        }

    },
    signin: async (req, res, next) => {
        try {
            const newUser = await User.findOne({ email: req.body.email })
            newUser.is_online = true;
            await newUser.save();

            const token = jwt.sign(
                {
                    id: req.user.id,
                    role: req.user.role
                },
                process.env.SECRET,
                { expiresIn: 60 * 60 * 24 }
            )

            const user = {
                email: req.user.email,
                photo: req.user.photo
            }

            return res.status(200).json({
                success: true,
                token,
                user
            })


        } catch (err) {
            next(err)
        }
    }


};


module.exports = authController;