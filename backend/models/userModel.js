const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')

const userSchema = mongoose.Schema(
    {
        name: { type: 'String', required: true },
        email: { type: 'String', required: true, unique: true },
        password: { type: 'String', required: true },
        isAdmin: { type: 'Boolean', default: false }  // incase we need
    },
    {
        versionKey: false, // removed __v
        timestamps: true, // createdAt, updatedAt
    }
)

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcryptjs.genSalt(10)
    this.password = await bcryptjs.hash(this.password, salt)
})

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcryptjs.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema)
module.exports = User