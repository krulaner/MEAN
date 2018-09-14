const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({

	title: {
		type: String
	},
	description: {
		type: String,
		default: ""
	},
	completed: {
		type: Boolean,
		default: false
	}
}, {timestamps: true});

mongoose.connect("mongodb://localhost:27017/restful", {useNewUrlParser: true}, (errs)=>console.log(errs?errs:"db is good to go"));
module.exports = mongoose.model("Task", taskSchema);
