export default function BrandBox({ title = "", subTitle = "" }) {
    return (
        <div className="brand-box">
            {/* Title Text */}
            <h1 className="sub-title">
                {title}
            </h1>

            <div className="space-container" />

            {/* Sub Title Text */}
            {subTitle && <p className="description-text">{subTitle}</p>}

            <div className="space-container" />

            {subTitle && <p className="sub-title learn-more-text">Learn More</p>}
        </div>
    );
}