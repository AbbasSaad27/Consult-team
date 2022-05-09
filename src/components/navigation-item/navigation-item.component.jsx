import React from 'react';

import "./navigation-item.styles.css";

const NavigationItem = ({text, border}) => {
    return (
        <li className={`navigation-item ${border ? "border-bottom" : ""}`}>
            {text}
        </li>
    )
}

export default NavigationItem;