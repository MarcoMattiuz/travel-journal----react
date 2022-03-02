import React from "react";
import dot from '../images/dot.svg'


export default function Destination(props) {


    return (
        <div className="card--container">
            <img src={props.img} alt="img not found" className="card--img"></img>
            <div className="card--location">
                <img src={dot} alt="img not found" className="card--dot_icon"></img>
                <h4 className="card--location_name">{props.location}</h4>
                <a href={props.link} className="card--maps_link">View on Google Maps</a>
            </div>
            <h1 className="card--title">{props.title}</h1>
            <div className="card--period">{props.date}</div>
            <p className="card--description">{props.description}</p>
        </div>
    )
}