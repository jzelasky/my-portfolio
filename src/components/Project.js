import React from 'react';

export default function Project(title, desc, link, github, img) {

    if(!link){
        return (
            <div className="card m-3 card-styles">
                 <img className='card-img-top card-styles' src={img} alt='project screenshot'></img>
                 <div className='card-body d-flex justify-content-center card-styles'>
                     <h5 className='card-title card-styles'>{title}</h5>
                 </div>
                 <div className='card-body d-flex justify-content-center card-styles'>
                     <p className='card-text card-styles'>{desc}</p>
                 </div>
                 <div className='card-body d-flex justify-content-center card-styles'>
                    <a href={github} className='card-link card-styles'>Github Repository</a>
                 </div>
            </div>
         )
        
    } else {
        return (
            <div className="card m-3 card-styles">
                 <img className='card-img-top card-styles' src={img} alt='project screenshot'></img>
                 <div className='card-body d-flex justify-content-center card-styles'>
                     <h5 className='card-title card-styles'>{title}</h5>
                 </div>
                 <div className='card-body d-flex justify-content-center card-styles'>
                     <p className='card-text card-styles'>{desc}</p>
                 </div>
                 <div className='card-body d-flex justify-content-center card-styles'>
                     <a href={link} className='card-link card-styles'>Deployed Webpage</a>
                     <a href={github} className='card-link card-styles'>Github Repository</a>
                 </div>
            </div>
         )
    }
}