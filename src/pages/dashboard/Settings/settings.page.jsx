import React from "react"
import FooterNav from "../../../components/footer-nav/footer-nav.component"
import NavigationItem from "../../../components/navigation-item/navigation-item.component"
import UserPfp from "../../../components/user-pfp/user-pfp.component"

import "./settings.styles.css"

const SettingsPage = () => {
    return (
        <div className="page settings-page background-gray">
            <div className="settings-header">
                <div className="user-img-container">
                    <UserPfp />
                </div>
                <div className="about-user">
                    <p className="about-user-name">Jessica Jane</p>
                    <p className="about-user-email">jessicaJane1254@gmail.com</p>
                </div>
            </div>
            <div className="settings-navigation page-padding">
                <ul className="settings-nav-list">
                    <NavigationItem text={"Edit Profile"} border/>
                    <NavigationItem text={"Payment Details"} border/>
                    <NavigationItem text={"About Consulteam"} border/>
                    <NavigationItem text={"FAQs"} border/>
                    <NavigationItem text={"Share Consulteam App"} border/>
                    <NavigationItem text={"Help & Support"} />
                </ul>
            </div>

            <button type="button" className="btn btn-logout">Logout</button>
        </div>
    )
}

export default SettingsPage