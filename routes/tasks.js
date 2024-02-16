const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const TaskController = require('../controllers/TaskController')


router.post('/create', TaskController.create)
router.get('/', TaskController.getAll)
router.get('/id/:_id', TaskController.getId)
router.put('/markAsCompleted/:_id', TaskController.updateCompleted)
router.put('/id/:_id', TaskController.updateName)
router.delete('/id/:_id', TaskController.deleteId)





/*router.post('/create', async (req, res) => {
    try{
        //const { title } = req.body
        //const task = await Task.create({title});
        //res.status(201).send(task);
       // const taskTitle =req.body.title;
        //const taskComplete = req.body.completed;
        //const task = new Task ({title: taskTitle, completed: taskComplete});
        //await task.save()
        const task = await Task.create({...req.body, completed: false})
        res.status(201).json(task)
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
        res.json(task)   
    }catch(error){
        res.status(500).json({message:'dont delete task'})
    }
})
module.exports = router;*/