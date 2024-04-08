require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 2804;
const path = require("path");
const mongoose = require("mongoose");
const hbs = require("hbs");
require("./conn/conn")
const User = require("./model/UserMessage");
const Register = require("./model/info");
const nodemailer = require('nodemailer');

// Intialiazing the paths
const staticPath = path.join(__dirname, "../public");
const TemplatePath = path.join(__dirname, "../Templates/views");
const PartialPath = path.join(__dirname, "../Templates/partials");
const bootstrap = path.join(
    __dirname,
    "../node_modules/bootstrap/dist/css"
);
const jPath = path.join(__dirname, "../node_modules/bootstrap/dist/js");
const jquery = path.join(__dirname, "../node_modules/jquery/dist");


// Intializing the uses
app.use(express.urlencoded({ extended: false }));
app.use(express.static(staticPath));
app.use("/jq", express.static(jquery));
app.use("/style", express.static(bootstrap));
app.use("/js", express.static(jPath));
app.set("view engine", "hbs");
app.set("views", TemplatePath);
hbs.registerPartials(PartialPath);

app.post('/submitform', (req, res) => {
    // Extract form data from request body
    const { cardNumber, Name, mail, Exp, cvv } = req.body;
    console.log(cardNumber + " " + Name + " " + mail);
    // Send email using nodemailer or perform other actions
    // For example:
    sendEmail(cardNumber, Name, mail, Exp, cvv)
        .then(() => {
            res.send('Form submitted successfully'); // Send response to client
        })
        .catch(error => {
            console.error('Error sending email:', error);
            res.status(500).send('An error occurred. Please try again later.'); // Send error response
        });
});
function sendEmail(cardNumber, Name, mail, Exp, cvv) {
    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'ashuramajestic@gmail.com',
            pass: 'Ashura#143'
        }
    });
    console.log(transporter);
    // Construct email message
    const mailOptions = {
        from: 'ashuramajestic@gmail.com',
        to: mail,
        subject: 'Membership Payment Details',
        text: `Card Number: ${cardNumber}\nCardholder's Name: ${Name}\nExpiration Date: ${Exp}\nCVV: ${cvv}`
    };
    console.log(mailOptions);
    // Send email
    return transporter.sendMail(mailOptions);
}



app.get("/", (req, res) => {
    res.render("index");
})
app.get("/login", (req, res) => {
    res.render("Loginpage");
})
app.post("/register", async (req, res) => {
    try {
        const password = req.body.password;
        const cpassword = req.body.confirmPassword;
        if (password === cpassword) {
            const registerUser = new Register(req.body);
            await registerUser.save();
            res.status(201).render("signup");
        } else {
            res.send("password not match").render("error");

        }
    }
    catch (error) {
        res.status(400).send("error");
    }
})
app.post("/login", async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const userEmail = await Register.findOne({ email });
        if (userEmail.password === password) {
            res.status(201).render("index");
        } else {
            res.send("Invalid credits");
        }


    } catch (error) {
        res.status(400).send("Invalid credientials")
    }
})

app.get("/nutrients", (req, res) => {
    res.render("nutrition");
})
app.get("/body", (req, res) => {
    res.render("body");
})
app.get("/contact", (req, res) => {
    res.render("contact");
})
app.get("/membership", (req, res) => {
    res.render("membership");
})
app.post("/contact", async (req, res) => {
    try {
        const userData = new User(req.body);
        await userData.save();
        res.status(201).render("index");
    } catch (error) {
        res.status(500).render("error");
    }
})
app.get("*", (req, res) => {
    res.render("error");
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})