import React from "react";

export default function HiddenCard(props){
    return(
    <div>
        <img className="hidden-card" src={props.img}/>
    </div>
    )
}