import React from "react";
import ArtworkObjects from "./artGalleryData";
import ArtWork from "./artWork";


export default function GalleryMain(){
    return(
        <div>
            {ArtworkObjects.map(artObj => (
                <ArtWork imgSrc={artObj.src} key={artObj.id}/>
            ))}
        </div>
    )
} 