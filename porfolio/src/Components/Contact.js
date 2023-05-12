import React, { useState } from 'react';


function Contact() {
    const contactStyle = {
        fontSize: '2rem',
        textDecoration: 'none',
        color: '#9C95DC',
        fontFamily: "Merriweather",
        textAlign: 'center',
        padding: '1rem',
    };

    const buttonStyle = {
        backgroundColor: '#9C95DC',
        color: 'black',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        fontSize: '1.8rem',
        fontFamily: "Merriweather",
        textDecoration: 'none',
        margin: '1rem',
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);


    const handleSubmit = (event) => {
        event.preventDefault();

        if (name === '') {
            setNameError(true);
            return;
        } else {
            setNameError(false);
        }

        if (email === '') {
            setEmailError(true);
            return;
        } else {
            setEmailError(false);
        }

    };

    const handleNameChange = (event) => {
        setName(event.target.value);
        setNameError(false);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (regex.test(event.target.value)) {
            setEmailError(false);
        } else {
            setEmailError(true);
        }
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    return (
        <section id="contact" style={contactStyle}>
            <div>
                <h1>Contact Me</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={name} onChange={handleNameChange} />
                    {nameError && <p>This field is required</p>}
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} />
                    {emailError && <p>Please enter a valid email address</p>}
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" value={message} onChange={handleMessageChange}></textarea>
                </div>
                <button type="submit" style={buttonStyle}> Send</button>
            </form>
        </section>
    );

}



export default Contact;