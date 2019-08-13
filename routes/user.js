var express = require('express');

var UserController = require('../controllers/user');

var api = express.Router();

api.get('/user',UserController.getUser);
api.get('/user/all',UserController.getAllUsers);
api.post('/user',UserController.createUser);

module.exports = api;