const { Router } = require('express');
const category_controller = require('../controllers/category-controller');

const route = Router();

route.get('/', category_controller.read);

module.exports = route;
