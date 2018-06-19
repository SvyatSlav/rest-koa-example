'use strict';

const Router = require('koa-router');
const mainController = require('./controllers/main');


const router = new Router();
router.get('/', mainController.welcome);
router.get('/spec', mainController.showSwaggerSpec);
router.get('/stat', mainController.stat)
module.exports = router;
