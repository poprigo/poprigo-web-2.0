export default function BorderButton({ title, type = "black",
    onClick, style = {}, showIcon = true, showLoader }) {
    return (
        <div style={style} onClick={onClick && onClick} className={type === "black" ? "continueBtn" : "continueBtnWhite"}>
            <p className="continueBtnText">{title}</p>
            {showIcon &&
                <i className="fa fa-arrow-right nextIcon"></i>
            }

            {showLoader && <div className="loader"></div>}
        </div>
    )
}