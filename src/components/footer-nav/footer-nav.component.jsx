import React from "react";
import { ReactComponent as DashboardIcon} from "../../icons/dashboard.svg";
import { ReactComponent as BellIcon} from "../../icons/bell.svg";
import { ReactComponent as BasketIcon} from "../../icons/basket.svg";
import { ReactComponent as GearIcon} from "../../icons/gear.svg";




import "./footer-nav.styles.css"

const FooterNav = () => {
    return (
        <footer className="footer-nav">
            <ul className="navigation">
                <li className="nav-item nav-item1 nav-item-active">
                    <DashboardIcon className="nav-icon" />
                    <p>Dashboard</p>
                </li>
                <li className="nav-item nav-item2">
                    <BasketIcon className="nav-icon"/>
                    <p>Sessions</p>
                </li>
                <li className="nav-item nav-item3">
                    <BellIcon className="nav-icon"/>
                    <p>Notification</p>
                </li>
                <li className="nav-item nav-item4">
                    <GearIcon className="nav-icon"/>
                    <p>Settings</p>
                </li>
            </ul>
        </footer>
    )
}

export default FooterNav