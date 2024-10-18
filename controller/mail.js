const nodemailer = require("nodemailer");
const express = require("express");
const { HOST, NODE_PASS, NODE_EMAIL, MY_EMAIL } = require("../config/environment");

const router = express.Router()


router.get('/', async (req, res) => {
    res.send({ message: 'Email Routes' })
})

router.post('/post', async (req, res) => {
    const { data } = await req.body
    // console.log(data);
    // console.log(process.env.NODE_HOST);
    // const transporter = nodemailer.createTransport({
    //     host: HOST,
    //     port: 587,
    //     auth: {
    //         user: NODE_EMAIL,
    //         pass: NODE_PASS
    //     }
    // });

    try {
        //     const info = await transporter.sendMail({
        //         from: `${data.name} <${data.email}>`, // sender address
        //         to: MY_EMAIL, // list of receivers
        //         subject: data.name, // Subject line
        //         text: data.message, // plain text body
        //         html: "<b>Hello world?</b>", // html body
        //     });
        //     console.log("Message sent: %s", info.messageId);
        res.send({ message: 'Message Received', })
    } catch (e) {
        res.send({ message: e.message })
    }
})

module.exports = router