const Task = require("./models.js");

module.exports = {

	//getall
	allTasks: (req, res) =>
	{
		Task.find({})
			.then(task=>console.log(task)||res.json(task))
			.catch(errs=>console.log(errs)||res.json(errs))
	},
	createTask: (req,res) =>
	{
		Task.create(req.body)
			.then(task=>console.log(task)||res.json(task))
			.catch(errs=>console.log(errs)||res.json(errs))
	},
	oneTask: (req,res) =>
	{
		Task.findById(req.params.id)
			.then(task=>console.log(task)||res.json(task))
			.catch(errs=>console.log(errs)||res.json(errs))
	},
	updateTask: (req, res) =>
	{
		Task.update({_id: req.params.id}, req.body)
			.then(task=>console.log(task)||res.json(task))
			.catch(errs=>console.log(errs)||res.json(task))
	},
	deleteTask: (req,res) =>
	{
		Task.findByIdAndRemove(req.params.id)
			.then(task=>console.log(task)||res.json(task))
			.catch(errs=>console.log(errs)||res.json(errs))
	}

}