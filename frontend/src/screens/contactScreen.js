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
              "Content-Type": "application/json",
            },
            body: JSON.stringify(details),
          });
          setStatus("Submit");
          let result = await response.json();
          alert(result.status);
        };

    return (
        <section id="contact" className="flex justify-center py-36 flex-wrap mx-auto bg-gray-500 ">
            <form className="mt-3 flex-wrap mx-auto" onSubmit={handleSubmit}>
                <div className="form-group row">
                    <div className=" mt-3 ">
                        <label htmlFor="name">Name:</label>
                        <input type="text"  id="name" className="flex rounded-sm p-2 w-80 " placeholder="Your name" required />
                    </div>
                </div>

                <div className="form-group">
                    <div className=" mt-3">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" className="rounded-sm flex p-2 w-80" placeholder="Your email" required />
                    </div>
                </div>
                <div className="form-group mt-3">
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" className="flex rounded-sm p-2 h-36 w-80" placeholder="Write a message" required />
                    </div>
                </div>
                <div className="form-group flex justify-center">
                    <button type="submit" className="btn btn-success mt-3 w-100 d-block border-gray-100 p-2 hover:bg-gray-600 bg-gray-400 rounded">
                        {status}</button>
                </div>
            </form>
            <div className="mt-36 p-3  mx-auto ">
                <a href="https://www.instagram.com/lemilitaire6/" className="hover:bg-gray-700  pb-5 p-4 rounded-md">
                    <img src="/img/instaLogo.png" alt="intagram" className="inline-flex   w-10 "/>
                    <label className="inline-flex font-semibold text-white">lemilitaire6</label>
                </a>
            </div>
        </section>
    )
}

export default Contact;