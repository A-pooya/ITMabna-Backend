const {Router} = require('express');
const {HandleSignIn , HandleSignUp} = require('../controller/userController');

const router = Router();

router.post("/signIn" , HandleSignIn );

router.post("/signUp" , HandleSignUp);

module.exports = router