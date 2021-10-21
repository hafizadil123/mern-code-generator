const express = require('express');
const users = express.Router();
// const { checkToken } = require("../auth/token_validation");
// const { checkRoleAdmin } = require("../auth/admin_secured");
// const { loadRefData } = require("../utils/ref-data");

const usersController = require("../controllers/users.js");

users.get("/register", usersController.register);
// users.get("/list", checkToken, usersController.usersList);
// users.post('/register', usersController.register);
// users.post('/login', usersController.login);
// users.get('/profile', checkToken, usersController.profile);
// users.get('/healthCheck', usersController.healthCheck);
// users.post('/approve', usersController.approveProfile);
// users.post('/reject', usersController.rejectProfile);
// users.post("/:id/update", checkToken, checkRoleAdmin, loadRefData, usersController.updateProfile);
// users.post("/:id/delete", checkToken, checkRoleAdmin, usersController.deleteProfile);
// users.post("/:id/approve", checkToken, checkRoleAdmin, usersController.approveProfileAdmin);
// users.post("/upload", checkToken, checkRoleAdmin, usersController.upload);


module.exports = users;
