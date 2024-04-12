export default function WhyCard({ title, description, no }) {
    return (
        <div className="why-box">
            <div className={`why-image ${no == 1 ? "why-image-one" : no == 2 ? "why-image-two" : no == 3 ? "why-image-three" : "why-image-four"}`} />
            {/* <div className="ap-flex-gap" /> */}
            <h1 className="why-title-text">
                {title}
            </h1>
            <p className="why-description-text">
                {description}
            </p>
        </div>
    )
}