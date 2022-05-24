const mongoose = require ("mongoose");
const reviewsShema = mongoose.Schema({
    userId : 
    {type : mongoose.Schema.Types.ObjectId},
    name :{
        type : String,
        require : true 
    },
    comment :{
        type : String,
       
    },
    rating :{
        type : Number ,
        require : true 
    }
})

const productShema =  mongoose.Schema({

 name : {
  type : String,
  require : true 
 },
  image :{
type : String ,
require  : true ,
},
description :{
type : String ,
require : true ,
},
category :{
   type : String ,
   require : true ,
 },
 price :{
     type : Number , 
     require : true 

 } , 
 countInStock :{
    type : Number , 
    require : true 
 },
 
 rating :  {
    type : Number ,
    require : true ,
},
reviews :[reviewsShema ]  , 

},{timestamps : true},)

const Products = mongoose.model("productt" , productShema);
module.exports =  Products; 