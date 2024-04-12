export default function TitleText({ title = "", subTitle = "", mainSubTitle = "", heroTitle = false, isUP = false }) {
    return (
        <div className="text-container">
            {/*  */}

            {isUP && subTitle && <p className="sub-description-text">{subTitle}</p>}

            {/* Title Text */}
            <h1 className="title-text">
                {title}
                {heroTitle && <span className="title-text" style={{ color: "#EFB61B" }}> Poprigo!</span>}
            </h1>

            {/* Sub Title Text */}
            {mainSubTitle && <p className="sub-title-text">{mainSubTitle}</p>}
            {!isUP && subTitle && <p className="sub-description-text">{subTitle}</p>}
        </div>
    );
}