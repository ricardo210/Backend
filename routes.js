var employeeController = require('./controllers/employeeController');
var advertiserController = require('./controllers/advertiserController');
var adminController = require('./controllers/adminController');


exports.endpoints = [{method: 'GET', path: '/', config: {handler: function(request, reply){reply('API v1,admin')}}},
	{method: 'POST', path: '/v1/regadmin', config: adminController.createAdmin},
  {method: 'POST', path: '/v1/regadver', config: advertiserController.createAdvertiser},
  {method: 'POST', path: '/v1/regemplo', config: employeeController.createEmployee},
	{method: 'GET', path: '/v1/admins', config: adminController.getAdmin},
  {method: 'GET', path: '/v1/advertisers', config: advertiserController.getAdvertiser},
  {method: 'GET', path: '/v1/employees', config: employeeController.getEmployee}
];
