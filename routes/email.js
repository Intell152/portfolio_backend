const { Router } = require('express');

const { sendEmail } = require('../controllers/email');
const { validarJWT } = require('../middlewares/validate-jwt');

const router = Router();

router.post('/send', [
    validarJWT
], sendEmail );

module.exports = router;