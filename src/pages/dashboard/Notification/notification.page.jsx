import React from "react"
import NotificationCard from "../../../components/notification-card/notification-card.component";

import "./notification.styles.css"

const Notification = () => {
    return (
        <div className="page notification-page">
            <div className="page-header justify-none">
                <h1 className="page-title mb-0">Notifications</h1>
            </div>
            <div className="notifications-container page-padding">
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
            </div>
        </div>
    )
}

export default Notification;