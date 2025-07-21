import React, { useRef, useState } from 'react'
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";

function Contact() {
    const form = useRef();
    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [statusMessage, setStatusMessage] = useState('');
    const [statusType, setStatusType] = useState('');

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
            newErrors.email = "Invalid email format";
        }
        if (!formData.message.trim()) newErrors.message = "Message is required";
        return newErrors;
    };

    const sendEmail = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        emailjs.sendForm(
            'service_iztlj08',
            'template_a039htv',
            form.current,
            'iEhX7IP_JMSdJjzz4'
        ).then(
            () => {
                setStatusMessage("Message sent successfully!");
                setStatusType("success");
                setFormData({ name: '', email: '', message: '' });
                setErrors({});
            },
            (error) => {
                setStatusMessage("Failed to send message. Try again.");
                setStatusType("error");
                console.error(error);
            }
        );
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleKeyDown = (e, field) => {
        if (e.key === 'Enter') {
            if (field !== 'message') {
                e.preventDefault();
            }

            if (field === 'name') {
                if (!formData.name.trim()) {
                    setErrors(prev => ({ ...prev, name: "Name is required" }));
                } else {
                    setErrors(prev => ({ ...prev, name: "" }));
                    emailRef.current.focus();
                }
            } else if (field === 'email') {
                if (!formData.email.trim()) {
                    setErrors(prev => ({ ...prev, email: "Email is required" }));
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
                    setErrors(prev => ({ ...prev, email: "Invalid email format" }));
                } else {
                    setErrors(prev => ({ ...prev, email: "" }));
                    messageRef.current.focus();
                }
            } else if (field === 'message') {
                if (!e.shiftKey) {
                    const validationErrors = validate();
                    if (Object.keys(validationErrors).length > 0) {
                        e.preventDefault();
                        setErrors(validationErrors);
                    } else {
                        sendEmail(e);
                    }
                }
            }
        }
    };

    return (
        <div className='bg-black'>
            <h1 className=' text-3xl md:text-5xl text-center text-lime-500 md:mb-12'>Contact Me</h1>
            <div className='mx-auto flex flex-col md:flex-row gap-8 md:gap-36'>
                <div className='text-white md:w-1/2'>
                    <h1 className='text-3xl md:text-5xl mb-4 mt-8'>Let's talk</h1>
                    <p className='mb-6 text-lg'> Feel free to drop your message using the form.
                        Thank you for reaching out in advance</p>
                    <p className="flex items-center gap-2 mb-3 text-base"><FiMail className='text-xl' />bhanuribharath@gmail.com</p>
                    <p className="flex items-center gap-2 mb-3 text-base"><FiPhone className='text-xl' />+917989221589</p>
                    <p className="flex items-center gap-2 mb-3 text-base"><FiMapPin className='text-xl' />Hyderabad, Telangana.</p>
                    <a href="https://github.com/Bharathkumarbhanuri"
                        className=" flex items-center gap-2 mb-3 text-base hover:text-violet-500 transition"
                        target="_blank" rel="noopener noreferrer">
                        <FaGithub className='text-2xl' /> Bharathkumarbhanuri
                    </a>
                    <a href="https://www.linkedin.com/in/bhanuri-bharath-kumar-48b745243"
                        className=" flex items-center gap-2 mb-3 text-base hover:text-blue-500 transition"
                        target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className='text-2xl' /> Bhanuri Bharath Kumar
                    </a>
                </div>
                <form
                    noValidate
                    ref={form}
                    onSubmit={sendEmail}
                    className='w-full md:w-1/2 text-white'
                >
                    <p className='mb-1'>Your Name</p>
                    <input
                        ref={nameRef}
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onKeyDown={(e) => handleKeyDown(e, 'name')}
                        placeholder='Enter your name'
                        className='rounded-md text-black border border-lime-400 py-2 px-3 mb-3 w-full focus:outline-none focus:ring-2 focus:ring-lime-400'
                    />
                    {errors.name && <p className="text-red-500 text-sm mb-2">{errors.name}</p>}
                    <p className='mb-1'>Your Email</p>
                    <input
                        ref={emailRef}
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onKeyDown={(e) => handleKeyDown(e, 'email')}
                        placeholder='Enter your email'
                        className='rounded-md text-black  border border-lime-400 py-2 px-3 mb-3 w-full focus:outline-none focus:ring-2 focus:ring-lime-400'
                    />
                    {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}
                    <p className='mb-1'> Write your message here</p>
                    <textarea
                        ref={messageRef}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onKeyDown={(e) => handleKeyDown(e, 'message')}
                        className='px-2 border text-black rounded-md border-lime-400 mb-3 w-full focus:outline-none focus:ring-2 focus:ring-lime-400' rows={6} placeholder='Enter your message'>
                    </textarea>
                    {errors.message && <p className="text-red-500 text-sm mb-2">{errors.message}</p>}
                    <button
                        className='bg-lime-500 px-8 py-2 rounded-md w-full'
                        type="submit">
                        Submit
                    </button>
                    {statusMessage && (
                        <p className={`mt-1 text-center ${statusType === 'success' ? 'text-green-400' : 'text-red-500'}`}>
                            {statusMessage}
                        </p>
                    )}
                </form>
            </div>
        </div>
    )
}

export default Contact
