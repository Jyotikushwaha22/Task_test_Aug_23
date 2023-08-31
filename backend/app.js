// app.js
require('dotenv').config();
const express = require('express');
//const mongoose = require('mongoose');
const app = express();
const connectDb = require ('./config/dbConnection')

connectDb();


app.use("/items",require("./routes/itemRoutes"))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

