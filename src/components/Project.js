import React from 'react';

export default function Project(title, desc, link, github, img) {
    return (
       <div className="card m-3 bg-warning">
            <img className='card-img-top' src={img} alt='project screenshot'></img>
            <div className='card-body'>
                <h5 className='card-title'>{title}</h5>
                <p className='card-text'>{desc}</p>
            </div>
            <div className='card-body'>
                <a href={link} className='card-link'>Deployed Webpage</a>
                <a href={github} className='card-link'>Github Repository</a>
            </div>
       </div>
    )
}