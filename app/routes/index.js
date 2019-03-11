const billboardRoutes = require('./billboard_routes');

module.exports = function(app, db) {
	billboardRoutes(app,db);

}