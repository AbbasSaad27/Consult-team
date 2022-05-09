import React from "react";
import UserPfp from "../user-pfp/user-pfp.component";

import "./notification-card.styles.css";

const NotificationCard = () => {
    return (
        <div className="card-container">
            <div className="user-pfp-container">
                <UserPfp />
            </div>
            <div className="notification-message-container">
                <p className="notification-message">You have a new booking from <span className="name">John doe</span></p>
            </div>
            <div className="notification-time">
                <span>4:50 PM</span>
            </div>
        </div>
    )
}

export default NotificationCard