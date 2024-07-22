const mongoose = require("mongoose");



const DB= "mongodb+srv://sajith:sajith@cluster0.4l0xsbd.mongodb.net/"

mongoose.connect(DB,{
  
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("payroll database connected successfully")).catch((error)=> console.log(error.message));