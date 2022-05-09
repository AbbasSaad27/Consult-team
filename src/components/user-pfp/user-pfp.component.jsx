import React from "react"

// import {ReactComponent as UserIcon} from "../../icons/user.svg"
import userPng from "../../images/user.png"

import "./user-pfp.styles.css"


const UserPfp = () => {
    return (
        <>
            {/* <UserIcon className="user-icon"/> */}
            <img src={userPng} alt="user" className="user-icon"/>   
        </>
    )
}

export default UserPfp;