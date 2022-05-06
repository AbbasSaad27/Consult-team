import React from "react";

import './stat-card.styles.css'

const StatCard = () => {
    return (
        <article className="stat-card">
            <h3 className="stat-card-title">Total Bookings Completed</h3>
            <span className="stat-card-details">32,000</span>
        </article>
    )
}

export default StatCard;