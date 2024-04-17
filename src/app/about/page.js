import WhyCard from "@/src/components/about/whyCard";
import TitleText from "@/src/components/titleText";
import {
    visoinTitle, visionSubTitle, whyTitle, whySubTitle, VersatileTitle, VersatileDescription, MarketingTitle, MarketingDescription,
    AdvisorsTitle, AdvisorsDescription, budgeTitle, budgeDescription, aboutPageTitle, aboutPageDescription
} from "@/src/config/constant";
import Image from "next/image";

export default function About({ }) {
    return (
        <div className="about-page">
            <div className="ap-container">
                <div className="ap-title-cover">
                    <p className="ap-nav-text">Who We Are?</p>
                    <h1 className="ap-title-text">{aboutPageTitle}</h1>
                    <div className="ap-flex-gap" />
                    <p className="ap-sub-description-text">{aboutPageDescription}</p>
                </div>
                <div className="ap-hero-image" />
            </div>
            <div className="ap-why">
                <div className="container">
                    <TitleText title={whyTitle} subTitle={whySubTitle} />
                    <div className="why-box-container">
                        <WhyCard no="1" title={budgeTitle} description={budgeDescription} />
                        <WhyCard no="2" title={VersatileTitle} description={VersatileDescription} />
                        <WhyCard no="3" title={MarketingTitle} description={MarketingDescription} />
                        <WhyCard no="4" title={AdvisorsTitle} description={AdvisorsDescription} />
                    </div>
                </div>
            </div>
            <div className="ap-vision">
                <div className="container ap-vision-container">
                    <Image
                        height={2000}
                        width={2000}
                        alt="logo"
                        src="/assets/images/vision5.png"
                        style={{
                            width: "70vw",
                            height: "100%",
                            marginTop: "5vw",
                            marginBottom: "-5vw",
                            maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 10%, transparent 100%)",
                            // filter: "drop-shadow(0px 100000px 0 #886f51)",
                            // transform: "translateY(-100000px)",
                            objectFit: "contain", alignSelf: 'center'
                        }}
                    />
                    <TitleText title={visoinTitle} subTitle={visionSubTitle} />
                </div>
            </div>
        </div>
    )
}