const Task = require("../models/Task")

// Create Task
exports.createTask = async (req,res)=>{

 try{

  const {title,description} = req.body

  const task = await Task.create({
   title,
   description,
   createdBy:req.user.id
  })

  res.status(201).json(task)

 }catch(err){
  res.status(500).json({error:err.message})
 }

}

// Get all tasks
exports.getTasks = async (req,res)=>{

 try{

  const tasks = await Task.find({createdBy:req.user.id})

  res.json(tasks)

 }catch(err){
  res.status(500).json({error:err.message})
 }

}

// Update task
exports.updateTask = async (req,res)=>{

 try{

  const task = await Task.findByIdAndUpdate(
   req.params.id,
   req.body,
   {new:true}
  )

  res.json(task)

 }catch(err){
  res.status(500).json({error:err.message})
 }

}

// Delete task
exports.deleteTask = async (req,res)=>{

 try{

  await Task.findByIdAndDelete(req.params.id)

  res.json({message:"Task deleted"})

 }catch(err){
  res.status(500).json({error:err.message})
 }

}