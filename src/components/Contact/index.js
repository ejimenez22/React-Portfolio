import React from 'react'
import SideNav from '../Nav'

function Contact() {
    return (
        <>
        <SideNav />
        <section className='contactForm' id='Contact'>
            <h1>Contact Me</h1>
            <form id='contact-form' className='form'>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <br />
                    <input type='text' name='name' className='nameInput'></input>
                </div>
                <div>
                    <label htmlFor='email'>Email Address:</label>
                    <br />
                    <input type='email' name='email' className='email'></input>
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <br />
                    <textarea name='message' rows='5' />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </section>
        <div >
            <ul className='myLinks'>
                <li>
                <a href="https://github.com/ejimenez22" target="_blank" rel="noopener noreferrer">
                <img className="contactImg" alt="Git" src={require("../../assets/images/Git.png")} />
                </a>
                </li>
                <li>
                <a href="https://www.linkedin.com/in/enrique-jimenez-0121a5177/" target="_blank" rel="noopener noreferrer">
                <img className="contactImg" id='linkedinImg' alt="Linkedin" src={require("../../assets/images/Linkedin.png")} />
                </a>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Contact