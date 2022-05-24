
import ProductModel from "./Models/Products.js"




export const createProduct = async  (req , res)=>{
   const  Product = new ProductModel({
       rating : req.body.rating,
       reviews  : req.body.reviews,
       countInStock  :req.body.countInStock,
       name : req.body.name,
       image : req.body.image,
       description : req.body.description ,
       category : req.body.category})

try {
   
   await  Product.save();
   res.send ("insert data ") 
} catch (error) {
   res.send (" error ") 
}}
