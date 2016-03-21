var usersController = require('./controllers/usersController');
var authController = require('./controllers/authController');

exports.endpoints = [{method: 'GET', path: '/', config: {handler: function(request, reply){reply('API v1, login')}}},
	{method: 'POST', path: '/v1/register', config: usersController.createUser},
		{method: 'GET', path: '/v1/users', config: usersController.getUser},
	{method: 'POST', path: '/v1/login', config: authController.login},
	{method: 'GET', path: '/v1/logout', config: authController.logout},

];
