const express = require('express');
const Todo = require('../models/todo.schema')
const router = express();


router.get('/todo', (req, res)=>{
    res.status(200).json({success:true, msg: 'TodoRoutes of working successfully'});
})


router.post('/createtodo', (req, res)=>{
    console.log(req.body ,'=======')
    const {title, task, bgcolor, user} = req.body;
    try {
        const todo = new Todo({
            user,
            title,
            task,
            bgcolor
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