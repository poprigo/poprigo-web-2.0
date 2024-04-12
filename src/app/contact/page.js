"use client"
import { useState } from 'react';
import TitleText from "@/src/components/titleText";
import { contactTitle, contactSubTitle } from "@/src/config/constant";
import Input from '@/src/components/input';
import { toast } from 'react-hot-toast';
import MapComponent from '@/src/components/contact/map';
import AddressComponent from '@/src/components/contact/address';

const ContactUs = ({ }) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.mobile || !formData.message) {
            toast.error("All fields are required.")
            return;
        } else {
            {/* 
                Your message has been successfully received, and we will be in touch with you shortly.
                Your message was not sent. Please try again later!
            */}
        }

        console.log(formData);
        setFormData({ name: '', email: '', mobile: '', message: '' });
    };

    return (
        <div className="contact-page">
            {/* Header Section Start */}
            <div className="container">
                <div className="form-row">
                    {/* Left illustration */}
                    <div className="illustration-left"></div>

                    <div className="form-wrapper">
                        <TitleText title={contactTitle} subTitle={contactSubTitle} />

                        <Input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
                        <div className="row">
                            <Input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
                            <Input type="tel" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} />
                        </div>
                        <Input
                            rows={4}
                            name="message"
                            type="textarea"
                            placeholder="Post your query now, and we'll get in touch with you soon!"
                            value={formData.message} onChange={handleChange} />

                        {/* Submit Button */}
                        <div className="submit-btn" onClick={handleSubmit}>
                            <span class="submit-btn-text">Send Your Message</span>
                        </div>
                    </div>

                    {/* Right illustration */}
                    <div className="illustration-right"></div>
                </div>
                <div className="section-end-space" />
            </div>
            {/* Header Section End */}

            {/* Map Section Start */}
            <div className="contact-section">
                <div className="container">
                    <TitleText title={"Get in touch with Poprigo"} subTitle={"INDIA"} isUP={true} />
                    <div className="map-wrapper">
                        <MapComponent />
                        <div className="contact-details">
                            <AddressComponent title="Address" value="Digital Velly, Surat - 394101" />
                            <AddressComponent title="Email" value="poprigo23@gmail.com" />
                            <AddressComponent title="Phone" value="+91 9714154356" />

                            <div className="c-icon-container">
                                <div id="c-facebook"><i className="fab fa-facebook"></i></div>
                                <div id="c-instagram"><i className="fab fa-instagram"></i></div>
                                <div id="c-dribbble"><i className="fab fa-dribbble"></i></div>
                                <div id="c-linkedin"><i className="fab fa-linkedin"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="section-end-space" />
                </div>
            </div>
            {/* Map Section End */}
        </div>
    )
}

export default ContactUs