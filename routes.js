var usersController = require('./controllers/usersController');
var authController = require('./controllers/authController');
var contactController = require('./controllers/contactController');

exports.endpoints = [{method: 'GET', path: '/', config: {handler: function(request, reply){reply('API v1, login')}}},
	{method: 'POST', path: '/v1/register', config: usersController.createUser},
	{method: 'POST', path: '/v1/update', config: usersController.updateUser},
	{method: 'GET', path: '/v1/users', config: usersController.getUser},
	{method: 'POST', path: '/v1/login', config: authController.login},
	{method: 'GET', path: '/v1/logout', config: authController.logout},
	{method: 'DELETE', path: '/v1/erase/{userId}', config: usersController.deleteUser},
	{method: 'POST', path: '/v1/send-message', config: contactController.sendMessage},
	{method: 'POST', path: '/v1/read-message', config: contactController.updateMessage},
	{method: 'GET', path: '/v1/load-message', config: contactController.getMessage}
];
