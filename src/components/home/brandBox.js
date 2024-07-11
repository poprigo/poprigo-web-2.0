'use client';
import { useRouter } from 'next/navigation';

export default function BrandBox({ title = "", subTitle = "", no }) {
    const { push } = useRouter();
    return (
        <div className="brand-box">
            <div className="brand-icon-cover">
                <div className={`brand-icon ${no == 1 ? "brand-icon-one" : no == 2 ? "brand-icon-two" : no == 3 ? "brand-icon-three" : "brand-icon-four"}`} />
                {/* Title Text */}
                <h1 className="sub-title">
                    {title}
                </h1>
            </div>

            <div className="space-container" />

            {/* Sub Title Text */}
            {subTitle && <p className="description-text">{subTitle}</p>}

            <div className="space-container" />

            {subTitle && <p onClick={()=> push('/service')} className="sub-title learn-more-text">Learn More</p>}
        </div>
    );
}