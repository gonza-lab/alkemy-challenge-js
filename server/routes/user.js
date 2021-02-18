const { Router } = require('express');
const joi_validator = require('../middlewares/joi-validator');
const user_controller = require('../controllers/user-controller');
const user_schema = require('../joi/user-schema');

const route = Router();

route.post(
  '/',
  joi_validator(user_schema.register, 'body'),
  user_controller.register
);
route.post(
  '/login',
  joi_validator(user_schema.log, 'body'),
  user_controller.log
);

module.exports = route;
