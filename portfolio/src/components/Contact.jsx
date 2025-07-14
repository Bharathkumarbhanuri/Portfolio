import React, { useRef } from 'react'
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";

function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_iztlj08',     // service ID
            'template_a039htv',     // template ID
            form.current,
            'iEhX7IP_JMSdJjzz4'       //  public key
        ).then(
            (result) => {
                alert("Message sent successfully!");
                form.current.reset();
            },
            (error) => {
                alert("Failed to send message. Try again.");
                console.error(error);
            }
        );
    };

    return (
        <div className='bg-black'>
            <h1 className='text-5xl text-center text-lime-500 mb-8'>Contact Me</h1>
            <div className='flex gap-36'>
                <div className='text-white'>
                    <h1 className='text-5xl mb-4 mt-2'>Let's talk</h1>
                    <p className='mb-4 text-lg'> Feel free to drop your message using the form.
                        Thank you for reaching out in advance</p>
                    <p className="flex items-center gap-2 mb-3 text-lg"><FiMail className='text-2xl' />bhanuribharath@gmail.com</p>
                    <p className="flex items-center gap-2 mb-3 text-lg"><FiPhone className='text-2xl' />7989221589</p>
                    <p className="flex items-center gap-2 mb-3 text-lg"><FiMapPin className='text-2xl' />Hyderabad, Telangana.</p>
                    <a href="https://github.com/Bharathkumarbhanuri"
                        className=" flex items-center gap-2 mb-3 text-lg hover:text-violet-700"
                        target="_blank" rel="noopener noreferrer">
                        <FaGithub className='text-2xl' /> Bharathkumarbhanuri
                    </a>
                    <a href="https://www.linkedin.com/in/bhanuri-bharath-kumar-48b745243"
                        className=" flex items-center gap-2 mb-3 text-lg hover:text-blue-500"
                        target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className='text-2xl' /> Bhanuri Bharath Kumar
                    </a>
                </div>
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className='w-1/2 text-white'
                > 
                    <p className='mb-1'>Your Name</p>
                    <input
                        type="text" 
                        name="name" 
                        placeholder='Enter your name' 
                        className='rounded-md text-black border border-lime-400 py-2 px-3 mb-3 w-full' 
                    />
                    <p className='mb-1'>Your Email</p>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder='Enter your email' 
                        className='rounded-md text-black  border border-lime-400 py-2 px-3 mb-3 w-full' 
                    />
                    <p className='mb-1'> Write your message here</p>
                    <textarea 
                        name="message" 
                        className='px-2 border text-black rounded-md border-lime-400 mb-3 w-full' rows={6} placeholder='Enter your message'>
                    </textarea>
                    <button 
                        className='bg-cyan-500 px-8 py-2 rounded-md w-full' 
                        type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact
