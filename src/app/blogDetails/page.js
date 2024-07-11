"use client"
import SmallBlog from "@/src/components/blog/smallBlog";
import BorderButton from "@/src/components/borderButton";
import CommonInput from "@/src/components/input";
import ShopifyBox from "@/src/components/shopifyBox";
import TitleText from "@/src/components/titleText";
import { useState } from "react";
import { toast } from 'react-hot-toast';

export default function Blog({ }) {

    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.email) {
            toast.error("Email is required.")
            return;
        } else {
            setIsLoading(true)
            var fd = new FormData();
            fd.append("email", `Email: ${formData.email}`)

            fetch("https://script.google.com/macros/s/AKfycbyimyK3UMeJV4RtHOGgEXJUkUu1jkKYACy68TqxoGzGq78XTTKdjkJCBGbNd7W-RKbg6Q/exec", {
                method: "POST",
                body: fd
            }).then(response => {
                if (response.ok) {
                    toast.success("Sucessfully registerd")
                } else {
                    toast.error("Please try again later!")
                }
            }).catch(error => {
                console.error('Error:', error);
                toast.error("Please try again later!")
            }).finally(() => {
                setIsLoading(false)
                setFormData({ name: '', email: '', mobile: '', message: '' });
            });
        }
    };


    return (
        <div className="blog-page">
            <div className="three-x-space-container" />

            <div className="blog-details-container">
                <div className="blog-details-section">
                    <Title text="Illuminate your app vision with bespoke design, whereinnovation converges with user-centric brilliance." />
                    <Description text="Illuminate your app vision with bespoke design, whereinnovation converges with user-centric brilliance. Illuminate your app vision with bespoke design, where innovation converges with user-centric brilliance." />

                    <div className="blog-details-image" />
                    <Description text="Illuminate your app vision with bespoke design, whereinnovation converges with user-centric brilliance. Illuminate your app vision with bespoke design, where innovation converges with user-centric brilliance." />
                    <Description text="Illuminate your app vision with bespoke design, whereinnovation converges with user-centric brilliance. Illuminate your app vision with bespoke design, where innovation converges with user-centric brilliance." />

                    <div className="blog-details-image" />
                    <div className="space-container" />
                    <ul className="a">
                        <li>Illuminate your app vision with bespoke design, whereinnovation converges with user-centric brilliance.</li>
                        <li>Illuminate your app vision with bespoke design, whereinnovation converges.</li>
                        <li>Illuminate your app vision with bespoke design, whereinnovation converges with user-centric.</li>
                    </ul>
                </div>

                <div className="more-blog-section">
                    <ShopifyBox />
                    <div className="three-x-space-container" />

                    <Title text="More articles" />
                    <div className="double-space-container" />
                    <SmallBlog />
                    <div className="space-container" />
                    <div className="space-container" />
                    <SmallBlog />
                </div>
            </div>
            <div className="three-x-space-container" />

            <div className="subscribe-container">
                <TitleText title={"Reach out, and we’ll send it to you right away!"} isUP={true} subTitle={"Want to read more?"} />
                <CommonInput type="text" name="email" placeholder="Enter your email address" value={formData.email} onChange={handleChange} />
                <BorderButton
                    onClick={handleSubmit}
                    title="Subscribe"
                    showLoader={isLoading}
                    showIcon={false}
                    style={{ backgroundColor: "#212833", marginTop: "0vw", color: '#fffdfa' }} />
            </div>
            <div className="section-end-space" />
        </div>
    )
}

const Title = ({ text }) => (
    <h1 style={{ fontSize: "2vw", lineHeight: "2.6vw" }} className="ap-title-text">
        {text}
    </h1>
)

const Description = ({ text }) => (
    <p className="ap-sub-description-text">
        {text}
    </p>
)