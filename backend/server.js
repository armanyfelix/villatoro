require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const cors = require("cors");
const nodemailer = require("nodemailer");
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

connectDB();

const app = express();
const contact = express();
const stripeApp = express();


// middleware
app.use(express.json());
app.use(cors());
app.use("/api/products", productRoutes);


stripeApp.use(express.json());
stripeApp.use(cors());

contact.use(express.json());
contact.use(cors())


const PORT = process.env.PORT || 3001;
const STRIPE_PORT = process.env.STRIPE_PORT || 3003;
const CONTACT_PORT = process.env.CONTACT_PORT || 3002;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
stripeApp.listen(STRIPE_PORT, () => console.log(`Stripe running on port ${STRIPE_PORT}`));
contact.listen(CONTACT_PORT, () => console.log(`Contact running on port ${CONTACT_PORT}`));




// STRIPE
stripeApp.post("/checkout", async (req, res) => {
    // console.log(req.body);
    const { id, amount, shipping } = req.body;
    try {
        const pay = await stripe.paymentIntents.create({
            amount,
            currency: "MXN",
            description: "Omar Villatoro Paint's",
            payment_method: id,
            receipt_email: shipping.email,
            shipping: {
                name: `${shipping.firstName} ${shipping.lastName}`,
                phone: shipping.number,
                address: {
                  line1: shipping.address1,
                  line2: shipping.address2,
                  city: shipping.city,
                  postal_code: shipping.postaCode,
                  state: shipping.state,
                  country: shipping.country,
                },
            },
            confirm: true,
        });
        // console.log(pay);
        return res.status(200).json({ message: "Succesful Payment" })

    } catch (error) {
        return res.json({ message: error.raw.message });
    }
  });




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

