import { TextField, Button, Typography } from "@material-ui/core";
import { useState } from "react";

function Contact() {

    const [status, setStatus] = useState("Submit");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        const response = await fetch("http://localhost:3002/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };

    return (
        <section id="contact" className="justify-center text-center py-14 mx-auto bg-gray-600">
            <Typography variant="h2">Contact</Typography>
            <div className="flex flex-wrap py-16">
            <form className="mt-3 flex-wrap mx-auto bg-gray-400 w-96 p-4 rounded-lg" onSubmit={handleSubmit}>
                <div className="form-group mt-3">
                    <TextField type="text" id="name" fullWidth required label="Name" variant="outlined" />
                </div>
                <div className="form-group mt-3">
                    <TextField type="email" id="email" fullWidth required label="Email" variant="outlined" />
                </div>
                <div className="form-group mt-3">
                    <TextField type="text" id="message" rows={4} multiline fullWidth required label="Message" variant="outlined" />
                </div>
                <div className="form-group flex justify-center mt-3">
                    <Button type="submit" variant="contained">
                        {status}
                    </Button>
                </div>
            </form>
            <div className="mt-36 p-3 mx-auto ">
                <a href="https://www.instagram.com/lemilitaire6/" className="hover:bg-gray-700  pb-5 p-4 rounded-md">
                    <img src="/img/instaLogo.png" alt="intagram" className="inline-flex   w-10 " />
                    <label className="inline-flex font-semibold text-white">lemilitaire6</label>
                </a>
            </div>
            </div>
        </section>
    )
}

export default Contact;