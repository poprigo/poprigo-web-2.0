import {
    AdvisorsDescription, AdvisorsTitle, MarketingDescription, MarketingTitle, VersatileDescription, VersatileTitle,
    budgeDescription, budgeTitle, whySubTitle, whyTitle
} from "../config/constant";
import WhyCard from "./about/whyCard";
import TitleText from "./titleText";

export default function WhyPoprigo({ }) {
    return (
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
    );
}