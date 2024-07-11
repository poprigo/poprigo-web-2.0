
import TitleText from "@/src/components/titleText";
import {  serviceSubTitle, serviceTitle } from "@/src/config/constant";

export default function Blog({ }) {
    return (
        <div className="blog-page">
            <TitleText title={serviceTitle} subTitle={serviceSubTitle} />
            
            <div className="space-container" />
            <div className="space-container" />

            <div className="container">
                <div className="service-row">
                    <div className="service-image-container mobile-image" />
                    <div className="service-text-container">
                        <Title text="Mobile Application" />
                        <Description text="Crafting intuitive and engaging mobile experiences that resonate with users and drive business success. From concept to launch, our team ensures your app stands out in the crowded marketplace, delivering high performance and a seamless user experience across all devices." />
                    </div>
                </div>

                <div className="section-end-space" />

                <div className="service-row">
                    <div className="service-text-container">
                        <Title text="Website Development" />
                        <Description text="Building responsive and dynamic websites that captivate your audience and enhance your online presence. Our developers leverage the latest technologies to create sites that are not only visually appealing but also fast, secure, and scalable, tailored to meet your unique business objectives." />
                    </div>
                    <div className="service-image-container website-image" />
                </div>

                <div className="section-end-space" />

                <div className="service-row">
                    <div className="service-image-container uiux-image" />
                    <div className="service-text-container">
                        <Title text="UX/UI Design" />
                        <Description text="Creating user-centered designs that are both visually appealing and highly functional, ensuring a seamless user experience. Our designers focus on understanding your users' needs and behaviors, crafting interfaces that are intuitive, accessible, and visually compelling to keep users engaged." />
                    </div>
                </div>

                <div className="section-end-space" />

                <div className="service-row">
                    <div className="service-text-container">
                        <Title text="Integrate your" />
                        <Title text="online sales platforms" />
                        <Description text="Streamlining your e-commerce operations by integrating and optimizing your Shopify store for better performance and sales. We ensure your online store is set up for success with custom features, seamless third-party integrations, and a user-friendly shopping experience that boosts conversion rates." />
                    </div>
                    <div className="service-image-container shopify-image" />
                </div>

                <div className="section-end-space" />

                <div className="service-row">
                    <div className="service-image-container software-image" />
                    <div className="service-text-container">
                        <Title text="Software Development" />
                        <Description text="Developing robust and scalable software solutions tailored to meet your specific business needs and challenges. Our team of expert developers utilizes agile methodologies to deliver high-quality, custom software that enhances efficiency, drives innovation, and provides a competitive edge in your industry." />
                    </div>
                </div>

            </div>
            <div className="section-end-space" />
        </div>
    )
}

const Title = ({ text }) => (
    <h1 style={{ textAlign: 'center', fontSize: "2.8vw", lineHeight:"3.6vw" }} className="ap-title-text">
        {text}
    </h1>
)

const Description = ({ text }) => (
    <p style={{ textAlign: 'center' }} className="ap-sub-description-text">
        {text}
    </p>
)