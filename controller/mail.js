const nodemailer = require("nodemailer");
const express = require("express")

const router = express.Router()

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'chaya4@ethereal.email',
        pass: 'V21NU8EMhf5F2cgFcn'
    }
});

// router.post('/', async (req, res) => {
//     try {
//         res.send({ message: 'Email Receive successfully' })
//     } catch (e) {
//         res.send({ message: e.message })
//     }
// })

const sendemail = async (req, res) => {
    const { data } = await req.json()
    console.log(data);

    // const { name, number, email, message } = req.data
    // console.log(req.data);

    // const info = await transporter.sendMail({
    //     from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
    //     to: "bar@example.com, baz@example.com", // list of receivers
    //     subject: "Hello ✔", // Subject line
    //     text: "Hello world?", // plain text body
    //     html: "<b>Hello world?</b>", // html body
    // });
    res.send({ message: 'success', data: data })
};

module.exports = sendemail