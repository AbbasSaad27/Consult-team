import React from "react"
import FooterNav from "../../../components/footer-nav/footer-nav.component";
import NotificationCard from "../../../components/notification-card/notification-card.component";

import "./notification.styles.css"

const Notification = () => {
    return (
        <div className="page">
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
            <FooterNav />
        </div>
    )
}

export default Notification;