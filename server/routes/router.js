const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");



//register user
router.post("/register",async(req,res)=>{
  // console.log(req.body);
  const {name,id,nitem,sdate,address,mobile,desc} = req.body;

    if(!name || !id || !nitem || !sdate || !address || !mobile || !desc){
        res.status(422).json("Enter Employee Details");
    }

    try {
        
        const preuser = await users.findOne({id:id});
        console.log(preuser);

        if(preuser){
            res.status(422).json("this is user is already present");
        }else{
            const adduser = new users({
                name,id,nitem,sdate,address,mobile,desc
            });

            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser);
        }

    } catch (error) {
        res.status(422).json(error);
    }
   
})

//get user data
router.get("/getdata",async(req,res)=>{
    try {
        const userdata = await users.find();
        res.status(201).json(userdata)
        console.log(userdata);
    } catch (error) {
        res.status(422).json(error);
    }
})



//get employee details separately
router.get("/getuser/:id",async(req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params;

        const userindividual = await users.findById({_id:id});
        console.log(userindividual);
        res.status(201).json(userindividual)

    } catch (error) {
        res.status(422).json(error);
    }
})



//update employee details

router.patch("/updateuser/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const updateduser = await users.findByIdAndUpdate(id,req.body,{
            new:true
        });

        console.log(updateduser);
        res.status(201).json(updateduser);

    } catch (error) {
        res.status(422).json(error);
    }
})

//delete
router.delete("/deleteuser/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const deletuser = await users.findByIdAndDelete({_id:id})
        console.log(deletuser);
        res.status(201).json(deletuser);

    } catch (error) {
        res.status(422).json(error);
    }
})


module.exports = router;