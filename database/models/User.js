const { Schema, model, Types } = require('mongoose');

const userSchema = Schema({
    // full_name:{type: String, required:true},
    // first_name:{type: String, required:true},
    // last_name:{type: String, required:true},
    // username:{type: String, required:true},
    email: { type: String, required: true },
    password: { type: String, required: true },
    photo: { type: String, required: true },
    role: { type: Number, required: true },
    is_online: { type: Boolean, required: true },
    is_verified: { type: Boolean, required: true },
    verify_code: { type: String, required: true },

}, {
    timestamps: true
});


const User = model('users', userSchema);

module.exports = User;
