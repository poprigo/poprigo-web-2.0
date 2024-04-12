export default function BorderButton({ title, type = "black" }) {
    return (
        <div className={type === "black" ? "continueBtn": "continueBtnWhite"}>
            <p className="continueBtnText">{title}</p>
            <i className="fa fa-arrow-right nextIcon"></i>
        </div>
    )
}