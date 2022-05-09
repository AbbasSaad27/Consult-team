import React, { useState } from "react"

import {ReactComponent as ArrowLeft} from "../../../icons/arrow-left.svg"
import FooterNav from "../../../components/footer-nav/footer-nav.component"

import "./sessions.styles.css"
import CardClass from "../../../components/class-card/class-card.component"

const SessionsPage = () => {

    const [tab, setTab] = useState(1)

    return (
        <div className="page page-sessions">
            <div className="page-header justify-none sessions-header">
                <div className="head-top">
                    <ArrowLeft className="icon arrow-left"/>
                    <h1 className="page-title ml-1 d-inline-blk">Classes</h1>
                </div>
                <div className="page-navigation-tab">
                    <button type="button" className={`btn tab-btn tab1 ${tab === 1 ? "tab-active" : ""}`} onClick={() => setTab(1)}>Upcoming</button>
                    <button type="button" className={`btn tab-btn tab1 ${tab === 2 ? "tab-active" : ""}`} onClick={() => setTab(2)}>Completed</button>
                    <button type="button" className={`btn tab-btn tab1 ${tab === 3 ? "tab-active" : ""}`} onClick={() => setTab(3)}>Cancelled</button>
                </div>
            </div>
            <div className="classes-container">
                <CardClass />
                <CardClass />
                <CardClass />
                <CardClass />
                <CardClass />
                <CardClass />
            </div>
            <FooterNav />
        </div>
    )
}

export default SessionsPage