import React from 'react'

//import SEO from "../../seo"
import './card.scss'

const Card = props => {
    var new_info = props.info.node;
    var imageContentfulUrl = new_info.logo.file.url;
    var newContentfulTitle = new_info.name;

    return (
        <>
            <div className="card">
                <div className="header-card">

                    <label>{newContentfulTitle}</label>
                </div>
                <img src={imageContentfulUrl} alt="newimage" />

            </div>
        </>
    )
}

export default Card