import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Mail from './Mail';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate'); 
    useEffect(() => {
        setTimeout(() =>{
            setLetterClass('text-animate-hover')
        }, 3000);
    },[]);

    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ivkiiz7', 'template_8c2zxwq', form.current, 'H7dBZhUA6itFy8oXE')
        .then((result) => {
            console.log(result.text);
            alert('Message was sent successfully! Thankyou for visiting..');
            window.location.reload(false);
        }, (error) => {
            console.log(error.text);
            alert('Failed to send the email! Please try again!');
            
        });
    };

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['C','o','n','t','a','c','t',' ','F','o','r','m']} indx={10} /> 
                    </h1>
                    <p>I am interested in working with tech companies on project of any sort, so 
                        as to gain experience and learn new technologies. Feel free to contact me through this form, for any request, queries or for even casual discussions.</p>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder="Name" required/>
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder="Email" required/>
                                </li>
                                <li>
                                    <input type="text" name="subject" placeholder="Subject" required/>
                                </li>
                                <li>
                                    <textarea name="message" placeholder='Message' required/>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <Mail />
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact;