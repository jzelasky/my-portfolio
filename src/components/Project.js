import React from 'react';

export default function Project(title, desc, link, github, img) {

    if(!link){
        return (
            <div className="card m-3 card-styles">
                 <img className='card-img-top card-styles' src={img} alt='project screenshot'></img>
                 <div className='card-body d-flex justify-content-center card-styles'>
                     <h5 className='card-title card-styles header-font-3'>{title}</h5>
                 </div>
                 <div className='card-body d-flex justify-content-center card-styles'>
                     <p className='card-text card-styles body-font-2'>{desc}</p>
                 </div>
                 <div className='card-body d-flex justify-content-center card-styles body-font-2'>
                    <a href={github} target="_blank" className='card-link card-styles' rel="noreferrer">Github Repository</a>
                 </div>
            </div>
         )
        
    } else {
        return (
            <div className="card m-3 card-styles">
                 <img className='card-img-top card-styles' src={img} alt='project screenshot'></img>
                 <div className='card-body d-flex justify-content-center card-styles'>
                     <h5 className='card-title card-styles header-font-3'>{title}</h5>
                 </div>
                 <div className='card-body d-flex justify-content-center card-styles'>
                     <p className='card-text card-styles body-font-2'>{desc}</p>
                 </div>
                 <div className='card-body d-flex justify-content-center card-styles body-font-2'>
                     <a href={link} target="_blank" className='card-link card-styles' rel="noreferrer">Deployed Webpage</a>
                     <a href={github} target="_blank" className='card-link card-styles' rel="noreferrer">Github Repository</a>
                 </div>
            </div>
         )
    }
}