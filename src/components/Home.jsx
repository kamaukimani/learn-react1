import React from 'react';
import {userName,city} from '../data/user';
function Home(props){
    return(
        <div id="home">
            {/* <h1 style={{
                color:"purple"
            }}>{userName} is a web developer from {city}</h1> */}
            <h1 style={{
                color:props.color
            }}>{props.name} is a web developer from {props.city}</h1>
        </div>
    )
}
export default Home;