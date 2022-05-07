import React from 'react'
import PriceTime from '../price-time/price-time.component'
import UserPfp from '../user-pfp/user-pfp.component'
import UserShortInfo from '../user-short-info/user-short-info.component'

import "./class-card.styles"

const CardClass = () => {
    return (
        <div className='class-card'>
            <div className="user-info-container">
                <div className='pfp-container'>
                    <UserPfp />
                </div>
                <UserShortInfo />
            </div>
            <PriceTime />
        </div>
    )
}

export default CardClass;