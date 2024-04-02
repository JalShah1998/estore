const express = require('express');
const mysql = require('mysql');

const pool = mysql.createPool({
   host: "localhost",
   user: "root",
   database: "estore",
   password: "Pass1234",
   port: 3306,
   multipleStatements: true,
});
const product = express.Router();

product.get("/",(req,res)=>{

   console.log("in get ");


   let categories_data;
   pool.getConnection((err,connection)=>{

     if (err){
         console.log("in error");
          res.status(500).send(err);
    }
     else{
        pool.query("select * from categories",(error,categories)=>{
           categories_data=categories;
           res.status(200).send(categories_data);
          })
       }
})

})

product.get("/getProducts",(req,res)=>{

   let productData;
   pool.query("select * from products",(err,rows)=>{
      if (err){
         res.status(500).send(err);
      }
      else{
         productData=rows;
         res.status(200).send(productData);
      }
   })


})

module.exports = product;