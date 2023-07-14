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
                    <button onClick={handlePrevious} className="prevButton" style={{"visibility": handleArrow.current === 0? "hidden": "visible"}}>{'<'}</button>
                    <button onClick={handleNext} className="nextButton" style={{"visibility": handleArrow.current === 3? "hidden": "visible"}}>{'>'}</button>
            </div>
            </div>
        </div>
    )
} 