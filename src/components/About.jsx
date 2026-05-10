import React from 'react';
import {image} from '../data/user';
function About({isBio}){
    return(
        <div id="about">
            <h2>About me</h2>
            {isBio ? <p>I love programming with all my heart</p> :null}
            <img src={image} alt="I made this"/>
        </div>
    )
}

export default About