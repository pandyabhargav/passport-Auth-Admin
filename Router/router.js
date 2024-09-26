const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');
const isAuthenticated = require('../controller/controller');

// Routes to render forms
router.get('/', controller.defaultCon);
router.get('/singup' ,controller.signupForm);
router.get('/login' ,controller.loginForm);

// Use POST for form submission (e.g., signup and login data)
router.post('/singup' ,controller.handleSignup);
router.post('/login' ,controller.handleLogin);

router.get('/logout' ,controller.handleLogout);

module.exports = router;
