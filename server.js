const xp = require("express");

const routes = require("./server/routes.js");

const app = routes(xp());

routes(app);

app.use(xp.static( __dirname + '/public/dist/public' ));

app.listen(8000, (errs)=>console.log(errs?errs:"gucci"));