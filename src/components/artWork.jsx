import React from "react";

export default function ArtWork({imgSrc, title, description}){
    return(
        <div className="artWork">
            <img src={imgSrc} alt="" className="art"/>
            <div className="callOut">
                <div className="artDesc">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
                <div className="connector"></div>
            </div>
        </div>
    )
}