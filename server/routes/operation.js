const { Router } = require('express');
const operation_controller = require('../controllers/operation-controller');
const operation_shema = require('../joi/operation-schema');
const joi_validator = require('../middlewares/joi-validator');
const jwt_validator = require('../middlewares/jwt-validator');

const route = Router();

route.post(
  '/',
  joi_validator(operation_shema.create, 'body'),
  jwt_validator,
  operation_controller.create
);

route.get('/', jwt_validator, operation_controller.read);

route.put(
  '/:id',
  joi_validator(operation_shema.update, 'body'),
  jwt_validator,
  operation_controller.update
);

route.delete('/:id', jwt_validator, operation_controller.remove);

route.get('/balance', jwt_validator, operation_controller.balance);

module.exports = route;
