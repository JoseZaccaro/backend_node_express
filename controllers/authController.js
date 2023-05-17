const User = require('../database/models/User.js')

const authController = {

    getAllUsers: async (req, res, next) => {
        try {
            let user;
            console.log(req.query)
            if (req.query.id) {
                console.log("Estoy en el if");
                user = await User.findOne({ _id: req.query.id });
            } else {
                
                console.log("Estoy en el else");
                user = await User.find();
            }
            
            throw new Error("Fallé a proposito xd")
            res.status(200).json({
                data: user,
                success: true,
            })

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


};


module.exports = authController;