const express = require('express');
const dotenv = require('dotenv');
const connectdb = require('./config/db');
const userRoutes = require('./routes/userRoutes')
const cors = require('cors')
const Product = require('./models/productModel')
const path = require('path')

const app = express();
dotenv.config();
connectdb();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use(cors())
app.use("/users", userRoutes)


app.post('/api/products', async (req, res) => {
    let product = new Product(req.body);
    let result = await product.save();
    res.send(result);
})

app.get('/products', async (req, res) => {
    let products = await Product.find()
    if (products.length > 0) {
        res.send(products)
    } else {
        res.send({ result: "No products found" })
    }
})

app.delete('/products/:id', async (req, res) => {
    const products = await Product.deleteOne({ _id: req.params.id })
    res.send(products)
})

app.get('/products/:id', async (req, res) => {
    let products = await Product.findOne({ _id: req.params.id })
    if (products) {
        res.send(products)
    } else {
        res.send({ message: "No products found.." })
    }
})

app.put('/products/:id', async (req, res) => {
    let products = await Product.updateOne(
        { _id: req.params.id },
        {
            $set: req.body
        }
    )
    res.send(products)

})



// --------------------------deployment------------------------------  

__dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/build")));
    
    app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
    ) 
}else{
    app.get("/", (req, res) => {
        res.send("API is running..");
    });
}

// --------------------------done-------------------------------------           


app.listen(
    PORT,
    console.log(`server is listening on port ${PORT}`));