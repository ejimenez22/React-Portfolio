import React, {useState} from 'react'
import SideNav from '../Nav'
import {validateEmail} from '../../utils/helpers'


  

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!errorMessage) {
        setFormState({ [e.target.name]: e.target.value });
        console.log('Form', formState);
      }
    };
  
    const handleChange = (e) => {
      if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        if (!isValid) {
          setErrorMessage('Your email is invalid.');
        } else {
          setErrorMessage('');
        }
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
      }
    };

    return (
        <>
        <SideNav />
        <section className='contactForm' id='Contact'>
            <h1>Contact Me</h1>
            <h2>ejimenez2292@gmail.com</h2>
            <form id='contact-form' className='form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <br />
                    <input type='text' name='name' className='nameInput' defaultValue={name} onBlur={handleChange} ></input>
                </div>
                <div>
                    <label htmlFor='email'>Email Address:</label>
                    <br />
                    <input type='email' name='email' className='email' defaultValue={email} onBlur={handleChange}></input>
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <br />
                    <textarea name='message' rows='5' defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
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
                <a href="https://www.linkedin.com/in/enriquejimenezsoftwaredeveloper/" target="_blank" rel="noopener noreferrer">
                <img className="contactImg" id='linkedinImg' alt="Linkedin" src={require("../../assets/images/Linkedin.png")} />
                </a>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Contact