import React from "react";

export default function Card(props){
    return(
        <div>
        {/* <img> {props.img}</img> */}
        <img  className="cards" src={props.img} /> 
        </div>
        
    );
}
