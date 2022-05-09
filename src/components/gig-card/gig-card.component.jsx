import React from "react"
import {ReactComponent as ImagesIcon} from "../../icons/images.svg"

import "./gig-card.styles.css"

const GigCard = () => {
    return (
        <div className="gig-card">
            <div className="gig-image">
                <ImagesIcon className="images-icon"/>
            </div>
            <div className="gig-details">
                <div className="gig-details-head">
                    <h3 className="gig-title">Title</h3>
                    <span className="per-hour-rate">$<span className="gig-price">12</span><span className="hash">/</span>hr</span>
                </div>
                <p className="gig-about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vel molestiae numquam perspiciatis officia assumenda ad rem similique, quam molestias.</p>
            </div>
        </div>
    )
}

export default GigCard