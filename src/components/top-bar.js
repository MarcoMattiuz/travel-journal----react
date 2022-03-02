import React from "react";
import earth from '../images/earth.svg'

export default function TopBar(){
    return(
        <nav className="top--bar">
            <img src={earth} alt="img not found" width="30px"></img>
            <h1> my travel journal. </h1>
        </nav>
    )
}