import React from "react"

import {ReactComponent as UserIcon} from "../../icons/user.svg"

import "./user-pfp.styles.css"


const UserPfp = () => {
    return (
        <div className="userPfp-container">
            <UserIcon className="user-icon"/>
        </div>
    )
}

export default UserPfp;