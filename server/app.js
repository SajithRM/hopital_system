require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser')
const pdf = require('html-pdf')
const app = express();
const mongoose = require("mongoose");
require("./db/conn");
const users = require("./models/userSchema");
const cors = require("cors");
const router = require("./routes/router");

const work = require("./models/workingSchema");
const workingRoutes = require("./routes/workingRoutes");

const pdfTemplate = require('./models/index');

//const paid = require("./models/paidSchema");
//const workingRoutes = require("./routes/paidRoutes");

const port = 8020;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

//post pdf generation and fetching the data



app.use(router);
app.use(workingRoutes);
//app.use(paidRoutes);



app.listen(port, () => {
    console.log(`server is start port number ${port}`);
});