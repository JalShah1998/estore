const express = require('express');
const product = require('./Routes/product');
const app = express();
const cors = require('cors');

app.use(cors());

app.use("/productCategories",product);

const server = app.listen(5001,()=>{
    console.log("dfdsfds");
})


