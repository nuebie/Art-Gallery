import React, {useRef, useState} from "react";
import ArtworkObjects from "./artGalleryData";
import ArtWork from "./artWork";


export default function GalleryMain(){
    const arr = useRef([0,0,0,0]);
    //const [handleArrow,setHandleArrow] = useState(0);
    const handleArrow = useRef(0);

    const handlePrevious = () => {
        //setHandleArrow(current => current-1);
        handleArrow.current = handleArrow.current - 1;
        console.log(handleArrow.current);
        arr.current.forEach((val,index) =>{
            //const element = document.querySelector(`.artWorkWrapper+${index}`);
            const newPosX = val + (100);
            arr.current[index] = newPosX;
            document.querySelector(`.slide${index}`).style.setProperty('--i', newPosX);
        })
        if(handleArrow.current === 0){
            document.querySelector('.prevButton').style.visibility = 'hidden';
        }
        else{
            document.querySelector('.prevButton').style.visibility = 'visible';
        }
        if(handleArrow.current === 3){
            document.querySelector('.nextButton').style.visibility = 'hidden';
        }
        else{
            document.querySelector('.nextButton').style.visibility = 'visible';
        }
      };
    
      const handleNext = () => {
        //setHandleArrow(current => current+1);
        handleArrow.current = handleArrow.current + 1;
        console.log(handleArrow.current);
        arr.current.forEach((val,index) =>{
            //const element = document.querySelector(`.artWorkWrapper+${index}`);
            const newPosX = val + (-100);
            arr.current[index] = newPosX;
            document.querySelector(`.slide${index}`).style.setProperty('--i', newPosX);
        })
        if(handleArrow.current === 0){
            document.querySelector('.prevButton').style.visibility = 'hidden';
        }
        else{
            document.querySelector('.prevButton').style.visibility = 'visible';
        }
        if(handleArrow.current === 3){
            document.querySelector('.nextButton').style.visibility = 'hidden';
        }
        else{
            document.querySelector('.nextButton').style.visibility = 'visible';
        }
      };


    return(
        <div className="gallerySection">
            <h1 className="logoText">アート</h1>
            <div className="spotlight"></div>
            <div className="artWorkWrapper">
                {ArtworkObjects.map((artObj,index) => (
                    <div className={`artWorkContainer slide${index}`} id="artWorkContainer" style={{ '--i': `${arr.current[index]}%`}}>
                         <ArtWork imgSrc={artObj.src} title={artObj.title} description={artObj.description} key={artObj.id}/>
                    </div>
                ))}
            <div className="arrowContainer">
                    
                    <button class="arrow left prevButton" onClick={handlePrevious}  style={{"visibility": handleArrow.current === 0? "hidden": "visible"}}>
                            <svg width="60px" height="80px" viewBox="0 0 50 80">
                                <polyline fill="none" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="
	                            45.63,75.8 0.375,38.087 45.63,0.375 "/>
                            </svg>  
                        </button>
                        <button class="arrow right nextButton" onClick={handleNext}  style={{"visibility": handleArrow.current === 3? "hidden": "visible"}}>
                            <svg width="60px" height="80px" viewBox="0 0 50 80">
                                <polyline fill="none" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="
	                            0.375,0.375 45.63,38.087 0.375,75.8 "/>
                            </svg>
                        </button>
            </div>
            </div>
        </div>
    )
} 