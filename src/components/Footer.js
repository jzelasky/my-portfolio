import React from 'react';
import githubIcon from './img/github-icon.png'
import linkedinIcon from './img/linkedin-icon.png'
import emailIcon from './img/email-icon.jpg'

export default function Footer() {
  return (
    <div className='body-font-1 mt-5 p-3 d-flex justify-content-around align-items-center'>
      <a href="https://github.com/jzelasky">
        <img className="icon" src={githubIcon} alt={"Github Icon- links to github profile"}></img>
      </a>
      <a href="mailto:jzelasky@gmail.com">
        <img className="icon" src={emailIcon} alt={"Email Icon- sends email"}></img>
      </a>
      <a href="https://linkedin.com/in/jessica-zelasky">
        <img className="icon" src={linkedinIcon} alt={"Linkedin Icon- links to linkedin profile"}></img>
      </a>
    </div>
  );
}