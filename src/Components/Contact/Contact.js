import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import './Contact.css';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_t31kb2e', 'template_ul6rlzv', form.current, 'DTKOKguu3WWbOD4iL')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <section className='Contact__container'>
            <div className="container">
                <h2 className='get_in_touch page-heading'>get in touch</h2>
                <div className="row contact-form">
                    <div className="col-md-7 contact-form">
                        <form className='portfolio-form' onSubmit={sendEmail} ref={form}>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingName" placeholder="Name" name="name" />
                                <label for="floatingName">Name</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingName" placeholder="Name" name="subject" />
                                <label for="floatingName">subject</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name="email" />
                                <label for="floatingInput">Email</label>
                            </div>
                            <div class="form-floating mb-3">
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }} name="message"></textarea>
                                <label for="floatingTextarea2">Message</label>
                            </div>
                            <div>
                                <button className="brand-btn text-capitalize" type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-5 ">
                        <div className="contact-wrapper shadow p-3  bg-body rounded">
                            <div className="sideContactInner d-flex justify-content-around">
                                <div><FaPhoneAlt /></div>
                                <div> <p>Mobile Number</p></div>
                                <div><h6>+8801867705676</h6></div>
                            </div>
                        </div>
                        <div className="contact-wrapper shadow p-3  bg-body rounded">
                            <div className="sideContactInner d-flex justify-content-around">
                                <div><FaEnvelope /></div>
                                <div> <p>Email</p></div>
                                <div><h6>athqiyaakila122@gmail.com</h6></div>
                            </div>
                        </div>
                        <div className="contact-wrapper shadow p-3  bg-body rounded">
                            <div className="sideContactInner d-flex justify-content-around">
                                <div><FaMapMarkerAlt /></div>
                                <div> <p>Address</p></div>
                                <div><h6>Chittagong,Bangladesh </h6></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;