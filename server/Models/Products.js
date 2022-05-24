const mongoose = require ("mongoose");

const productSchema = new mongoose.Schema({
   userId :
    {type :mongoose.Schema.Types.objectId}
  ,

    rating :  {
        type : Number ,
        require : true ,
 },
 reviews :{
       type : Array ,       
 },
countInStock :{
       type :Number ,
       require : true ,
      

 },
 name :{
       type : String ,
       require : true ,

 }, images :{
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
   

}, {timestamps : true});

const ProductModel = mongoose.model("ProductModel",productSchema);
export default  ProductModel  ;




