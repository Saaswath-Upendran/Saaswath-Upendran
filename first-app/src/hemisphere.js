import React from "react";

import northernPic from './images/jpg.jpg'
import southernPic from './images/jpg.jpg'

const hemisphereDisplay = ({latitude}) =>{
    const hemispheres = latitude > 0 ? 'Northern' : 'Southern';
    const { text , picture } = hemisphereConfig[hemispheres]
    return (
        <div className="{hemispheres}">
            <div className="ui raised text container segment">
                <div className="image">
                    <img src={ picture } alt="image1"/>
                </div>
                <div className="ui teal bottom attached label">
                    <h1>{ text }</h1>
                </div>
            </div>
        </div>
    )
}

const hemisphereConfig = {

    Northern:{
        text : 'its northern Hemisphere',
        picture: northernPic
    },
    Southern:{
        text:'its Southern Hemisphere',
        picture: southernPic
    }
}

export default hemisphereDisplay;