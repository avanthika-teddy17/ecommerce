import React from"react";
import "./Foodcard.css";
const Foodcard=(props)=>{
    return(
        <div>
        <img src={props.img} alt=""/>
        <h1>{props.productname}</h1>
        </div>
    );
    };
export default Foodcard;