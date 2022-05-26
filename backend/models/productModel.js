const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        id: { type: 'Number', required: true, unique: true },
        title: { type: 'String' },
        category: { type: 'String' },
        description: { type: 'String' },
        image: { type: 'String' },
        price: { type: 'Number' },
        rating: { type: 'Number' }
    },
    {
        versionKey: false, // removed __v
        timestamps: true, // createdAt, updatedAt
    }
)

const Product = mongoose.model('Product', productSchema)
module.exports = Product