import React from 'react'
import { Route, Routes } from 'react-router-dom'

import FooterNav from '../../components/footer-nav/footer-nav.component'
// import GigCard from '../../components/gig-card/gig-card.component'
// import StatCard from '../../components/stat-card/stat-card.component'
// import {ReactComponent as UserIcon} from "../../icons/user.svg"
// import userPng from "../../images/user.png"

import './dashboard.styles.css'
import Home from './Home/home.page'
import Notification from './Notification/notification.page'
import SessionsPage from './Sessions/sessions.page'
import SettingsPage from "./Settings/settings.page"

const Dashboard = () => {
    return (
        <main className='page page-dashboard page-pb'>
            {/* <header className='page-header'>
                <div className="page-about">
                    <h1 className='page-title'>Dashboard</h1>
                    <span className='welcome-message'>Welcome Back!</span>
                </div>
                <div className='profile-icon'>
                    <img src={userPng} alt="user" className='user-img'/>
                </div>
            </header>
            <div className="stat-card-container">
                <StatCard />
                <StatCard />
                <StatCard />
                <StatCard />
                <StatCard />
                <StatCard />
            </div>
            <div className="gigs-container">
                <div className="section-head">
                    <h2 className="section-title">My Gigs</h2>
                </div>
                <div className="gig-card-container">
                    <GigCard />
                    <GigCard />
                </div>
            </div> */}
            <Routes>
                
                <Route exact path='/' element={<Home />} />
                <Route path='/sessions' element={<SessionsPage />} />
                <Route path='/notifications' element={<Notification />} />
                <Route path='/settings' element={<SettingsPage />} />
            </Routes>
            <FooterNav />
        </main>
    )
}

export default Dashboard