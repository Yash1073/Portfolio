import "./WorkCardStyle.css";
import React from 'react';

import { NavLink } from "react-router-dom";


const WorkCard = (props) => {
    return (
        <div className="project_card">
            <img src={props.imgsrc} alt="todolist" />
            <div className="project_title"> {props.title} </div>
            <div className="pro_details">
                <p>
                    {props.text}
                </p>
                <div className="pro-btns">
                    <NavLink to={props.view} className="btn">View</NavLink>
                    <NavLink to={props.source} className="btn">Source</NavLink>
                </div>
            </div>
        </div>
    )
}

export default WorkCard