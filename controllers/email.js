const { response } = require('express');
const nodemailer = require('nodemailer');
const email = process.env.EMAIL;
const pass = process.env.PASS;

const sendEmail = (req, res = response) => {
    const body = req.body;

    var message = {
        from: email,
        to: email,
        subject: "Portafolio: " + body["dir"],
        text: body["content"],
    };
    var transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: email,
            pass: pass,
        }
    })

    transporter.sendMail(message, (error, info) => {
        if (error) {
            console.log('No Enviado')
            res.status(400).json({
                msg: "E-mail could't be sent"
            });
        } else {
            console.log('Enviado')
            res.json({
                msg: "E-mail sent successfully"
            });
        }
    })
}

module.exports = {
    sendEmail,
}