require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const cors = require("cors");
const nodemailer = require("nodemailer");
const Stripe = require('stripe');

connectDB();

const app = express();
const contact = express();
const stripe = express();


// middleware
app.use(express.json());
app.use(cors());
app.use("/api/products", productRoutes);

stripe.use(express.json());
stripe.use(cors({ origin: "http://localhost:3000" }));

contact.use(express.json());
contact.use(cors())


const PORT = process.env.PORT || 3001;
const STRIPE_PORT = process.env.STRIPE_PORT || 3003;
const CONTACT_PORT = process.env.CONTACT_PORT || 3002;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
stripe.listen(STRIPE_PORT, () => console.log(`Stripe running on port ${STRIPE_PORT}`));
contact.listen(CONTACT_PORT, () => console.log(`Contact running on port ${CONTACT_PORT}`));


// Stripe payments 
const stripeKey = new Stripe(process.env.STRIPE_SECRET_KEY)
stripe.post("/api/checkout", async (req, res) => {
    console.log(req.body);
    const { id, amount } = req.body;
    try {
        const pay = await stripeKey.paymentIntents.create({
            amount,
            currency: "USD",
            description: "Pinturitas compradas",
            payment_method: id,
            confirm: true,
        })
        console.log(pay);
        return res.status(200).json({ message: "Succesful payment" })
    } catch (error) {
        return res.json({message: error.raw.message});
    }
})


// NODEMAILER
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.USER,
        pass: process.env.PASS,
    },
});

transporter.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});

contact.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const mail = {
        from: name,
        to: process.env.SEND_TO,
        subject: "Email del Sitio web",
        html: `<p>Name: ${name}</p>
               <p>Email: ${email}</p>
               <p>Message: ${message}</p>`,
    };
    transporter.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: "ERROR" });
        } else {
            res.json({ status: "Message sent" });
        }
    });
});

