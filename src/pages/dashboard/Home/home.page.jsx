import React from "react"

import userPng from "../../../images/user.png"
import StatCard from "../../../components/stat-card/stat-card.component"
import GigCard from "../../../components/gig-card/gig-card.component"

// import "./home.styles.css"

const Home = () => {
    return (
        <div>
            <header className='page-header'>
                <div className="page-about">
                    <h1 className='page-title'>Dashboard</h1>
                    <span className='welcome-message'>Welcome Back!</span>
                </div>
                <div className='profile-icon'>
                    {/* <UserIcon className='icon user-icon'/> */}
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
            </div>
        </div>
    )
}

export default Home