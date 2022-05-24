const express = require("express");
let app = express();
const ProductRoute = require("./Routes/ProductRoutes");

const dotenv = require("dotenv");
dotenv.config();

let db = require("./db");
const cors = require("cors");
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/Product", ProductRoute);

app.listen(process.env.PORT, () => {
  console.log("backend is running now");
});
