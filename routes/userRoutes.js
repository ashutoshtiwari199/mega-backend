const express = require("express");
const router = express.Router();
const User = require('../models/user.schema')



router.get('/',(req,res)=>{
    res.status(200).json({status: "OK", message: "Your api is up and running"})
})

router.post('/signup', (req, res)=>{
    console.log(req.body ,'=======')
    const {name, email, password} = req.body;
    try {
        const todo = new User({
            name,
            email,
            password
        })

        todo.save((err, todo)=>{
            if(err) {
                return res.status(400).json({
                err: err,
                messege: "Unable to save in db"
                });
             }
            res.status(200).json({status: "OK", messege: todo})
        })

    } catch (error) {
        console.log(error)
        return res.status(400).json(error)
    }
})

module.exports = router;
