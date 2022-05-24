const dotenv = require("dotenv")
dotenv.config()

const mongoose = require("mongoose");
mongoose.connect(process.env.CONNEXION).then(console.log("connected to mongoDB")).catch(err=>(console.log(err)));


module.export = mongoose ; 