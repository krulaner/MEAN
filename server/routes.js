const bp = require('body-parser');
const api = require("./controller.js");

function routes(app)
{
	//all our of our desired routes go into here. These include GET, POST, PUST, and DELETE.
	app.use(bp.json());
	app.get('/tasks', api.allTasks);
	app.get('/tasks/:id', api.oneTask);
	app.post('/tasks/', api.createTask);
	app.put('/tasks/:id', api.updateTask);
	app.delete('/tasks/:id', api.deleteTask);
	return app;
}

module.exports = routes;