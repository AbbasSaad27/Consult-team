import React from "react";

import "./price-time.styles.css"

const PriceTime = () => {
    return (
        <div className="price-time-container">
            <span className="price">$32<span className="hash">/</span>hr</span>
            <span className="time"><span className="date">24/11/22</span>04:50 <span className="time-format">PM</span></span>
        </div>
    )
}

export default PriceTime;