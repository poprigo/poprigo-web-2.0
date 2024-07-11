'use client';
import { useRouter } from 'next/navigation';

export default function BrandBox({ subTitle = "", no }) {
    const { push } = useRouter();
    return (
        <div className="client-box">
            <div className={`client-image ${no == 1 ? "client-image-one" : no == 2 ? "client-image-two" : no == 3 ? "client-image-three" : "client-image-four"}`} />

            <div className="space-container" />

            {/* Sub Title Text */}
            {subTitle && <p className="description-text">{subTitle}</p>}
        </div>
    );
}