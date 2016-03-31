var usersController = require('./controllers/usersController');
var authController = require('./controllers/authController');
var contactController = require('./controllers/contactController');
var propertyController = require('./controllers/propertyController');

exports.endpoints = [{method: 'GET', path: '/', config: {handler: function(request, reply){reply('API v1, login')}}},
	{method: 'POST', path: '/v1/register', config: usersController.createUser},
	{method: 'POST', path: '/v1/update', config: usersController.updateUser},
	{method: 'GET', path: '/v1/users', config: usersController.getUser},
	{method: 'POST', path: '/v1/login', config: authController.login},
	{method: 'GET', path: '/v1/logout', config: authController.logout},
	{method: 'DELETE', path: '/v1/erase/{userId}', config: usersController.deleteUser},
	{method: 'POST', path: '/v1/send-message', config: contactController.sendMessage},
	{method: 'GET', path: '/v1/load-message', config: contactController.getMessage},
	{method: 'POST', path: '/v1/newproperty', config: propertyController.createProperty},
	{method: 'PUT', path: '/v1/updateproperty/{propertyId}', config: propertyController.updateProperty},
	{method: 'GET', path: '/v1/properties', config: propertyController.getProperty},
	{method: 'DELETE', path: '/v1/deleteP/{propertyId}', config: propertyController.deleteProperty}
];
