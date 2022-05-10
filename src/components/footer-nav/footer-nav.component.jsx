import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as DashboardIcon} from "../../icons/dashboard.svg";
import { ReactComponent as BellIcon} from "../../icons/bell.svg";
import { ReactComponent as BasketIcon} from "../../icons/basket.svg";
import { ReactComponent as GearIcon} from "../../icons/gear.svg";




import "./footer-nav.styles.css"

const FooterNav = () => {

    const [currPage, setCurrPage] = useState(1)

    const navigate = useNavigate()

    return (
        <footer className="footer-nav">
            <ul className="navigation">
                <li className={`nav-item nav-item1 ${currPage === 1 ? "nav-item-active" : ""}`} onClick={() => {
                    setCurrPage(1)
                    navigate("/home")
                }}>
                    <DashboardIcon className="nav-icon" />
                    <p>Dashboard</p>
                </li>
                <li className={`nav-item nav-item2 ${currPage === 2 ? "nav-item-active" : ""}`} onClick={() => {
                    setCurrPage(2)
                    navigate("/home/sessions")
                }}>
                    <BasketIcon className="nav-icon"/>
                    <p>Sessions</p>
                </li>
                <li className={`nav-item nav-item3 ${currPage === 3 ? "nav-item-active" : ""}`} onClick={() => {
                    setCurrPage(3)
                    navigate("/home/notifications")
                }}>
                    <BellIcon className="nav-icon"/>
                    <p>Notification</p>
                </li>
                <li className={`nav-item nav-item4 ${currPage === 4 ? "nav-item-active" : ""}`} onClick={() => {
                    setCurrPage(4)
                    navigate("/home/settings")
                }}>
                    <GearIcon className="nav-icon"/>
                    <p>Settings</p>
                </li>
            </ul>
        </footer>
    )
}

export default FooterNav