const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');
 
routes.get('/', lesson1Controller.camelleRoute);
routes.get('/neal', lesson1Controller.nealRoute);
routes.get('/claro', lesson1Controller.claroRoute)

module.exports = routes;