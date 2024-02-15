const express = require('express');
const router = express.Router();
const Task = require('../models/Task');


router.post('/create', async (req, res) => {
    try{
        const { title } = req.body
        const task = await Task.create({title});
        res.status(201).send(task);
    }
    catch(error){
        console.error(error);
        res.status(500).send({message: 'There was a problem trying to create a task'});
    }
   
});



router.get('/', async(req, res) => {
    try{
        const tasks = await Task.find();
        res.json(tasks);
    }catch(error){
        res.status(500).json({message:'There was a problem trying to get tasks'})
    }
});

router.get('/id/:_id', async (req, res) => {
    try{
        const task = await Task.findById(req.params._id);
        if(task === null) {
            return res.status(404).json({message : 'task not found'})
        } 
        res.json(task);
        }catch(error){
             res.status(500).json({message : 'Error in the request'});
        }     
});

router.put('/marcAsCompleted/:_id', async(req, res) => {
    try{
        const task = await Task.findByIdAndUpdate(req.params._id, {completed: true}, {new:true});
        res.json(task);
    }catch (error){
        res.status(500).json({message:"Server error"});
    }
});

router.put('/id/:_id', async(req, res) => {
    try{
        const task = await Task.findByIdAndUpdate(req.params._id, {title:req.body.title}, {new: true});
        res.json(task);
    }catch(error){
        res.status(500).json({message: 'task could not be updated'})
    }
});


router.delete('/id/:_id', async (req, res) => {
    try{
        const task = await Task.findByIdAndDelete(req.params._id);
        res.status(204).end();    
    }catch(error){
        res.status(500).json({message:'dont delete task'})
    }
})
module.exports = router;