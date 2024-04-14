require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 2804;
const path = require("path");
const hbs = require("hbs");
require("./conn/conn")
const Register = require("./model/info");
const receipe = require("./model/Receipe")
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
app.use(express.json());

app.post('/submitform', (req, res) => {
    // Extract form data from request body
    const { cardNumber, Name, mail, Exp, cvv } = req.body;

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
            user: process.env.MAIL_ID,
            pass: process.env.PASS
        }
    });

    // Construct email message
    const mailOptions = {
        from: process.env.MAIL_ID,
        to: mail,
        subject: 'Membership Payment Details',
        text: `Card Number: ${cardNumber}\nCardholder's Name: ${Name}\nExpiration Date: ${Exp}\nCVV: ${cvv}`
    };

    // Send email
    return transporter.sendMail(mailOptions);
}



app.get("/", async (req, res) => {
    res.render("index");
});
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
app.post('/findDishes', async (req, res) => {
    const { height, weight, gender, age } = req.body;

    // Convert age to number
    const ageNum = parseInt(age);

    // Calculate daily calories based on Basal Metabolic Rate (BMR)
    const dailyCalories = calculateCalories(height, weight, gender, ageNum);


    try {
        // Find dishes in the recipe collection
        const allDishes = await receipe.find();

        // Define age-based calorie ranges
        let minCalories, maxCalories;
        if (ageNum <= 18) {
            minCalories = dailyCalories * 0.8;
            maxCalories = dailyCalories * 1.2;
        } else if (ageNum <= 30) {
            minCalories = dailyCalories * 0.9;
            maxCalories = dailyCalories * 1.1;
        } else {
            minCalories = dailyCalories * 0.95;
            maxCalories = dailyCalories * 1.05;
        }

        // Filter dishes within the calorie range
        const filteredDishes = allDishes.filter(dish => {
            var total = dish.calories;
            return total >= minCalories && total <= maxCalories;
        });

        res.json(filteredDishes);
    } catch (error) {
        console.error("Error finding dishes:", error);
        res.status(500).json({ error: "An error occurred while finding dishes" });
    }
});



// Function to calculate Basal Metabolic Rate (BMR) based on user's characteristics
function calculateCalories(height, weight, gender, age) {

    let bmr = 0;
    if (gender === 'M') {
        bmr = (10 * weight + 6.25 * height - 5 * age + 5) % 700;
    } else if (gender === 'F') {
        bmr = (10 * weight + 6.25 * height - 5 * age - 161) % 700;
    }
    return bmr;
}
app.get("/nutrients", (req, res) => {
    res.render("nutrition");
})
app.get("/body", (req, res) => {
    res.render("body");
})
app.get("/contact", (req, res) => {
    res.render("contact");
})
app.get("*", (req, res) => {
    res.render("error");
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})