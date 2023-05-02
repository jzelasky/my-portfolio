import React from 'react';
import resume from '../files/Resume-2023.pdf'

export default function Resume() {
  return (
    <div className='m-3'>
      <h1 className='p-3 header-font-2'>Resume</h1>
      <div className='body-font-2 m-3'>
        <h1 className='header-font-3'>Professional Summary:</h1>
        <p> Full stack web developer with a background in mathematics. Trained at the University of Connecticut’s coding boot camp and earned a certificate in full-stack web development. Innovative problem-solver passionate about developing web apps. Strengths in creativity, logic, and building projects from ideation to execution.</p>
        <h1 className='header-font-3'>Education:</h1>
        <p>
          <ul>
            <li><strong>University of Connecticut</strong>, Remote - <i>Certificate in Full Stack Web Development</i> <small>(Nov 2022 - May 2023)</small></li>
            <li><strong>University of Connecticut</strong>, Storrs, CT - <i>Bachelor of Arts in Mathematics</i> <small>(Jan 2017 - Dec 2021)</small></li>
          </ul>
        </p>
        <h1 className='header-font-3'>Technical Skills:</h1>
        <p>
          <ul>
            <li><strong>Languages:</strong> JavaScript ES6+, CSS3, HTML5, mySQL, MongoDB</li>
            <li><strong>Applications:</strong> Github, VS Code, Insomnia, Heroku, GraphQL</li>
            <li><strong>Tools:</strong> Bootstrap, jQuery, Node.js, Express.js, Sequlize, Handlebars, Mongoose, React</li>
          </ul>
        </p>
        <h1 className='header-font-3'>Work Experience:</h1>
        <p>
          <ul>
            <li><strong>Robert Half</strong>, Remote - <i>Vendor Invoicing Specialist (Temporary)</i> <small>(Aug 2022 - May 2023)</small></li>
              <ul>
                <li>Entered vendor invoices accurately into online accounting system</li>
              </ul>
            <li><strong>Instacart</strong>, Various locations - <i>Shopper/Delivery Driver</i> <small>(Jan 2021 - Aug 2022)</small></li>
              <ul>
                <li> Shopped for customer's groceries efficiently</li>
                <li>Delivered customer's orders on time</li>
                <li>Achieved a 4.78/5.00 average customer rating</li>
              </ul>
          </ul>
        </p>
        <h1 className='header-font-3'>Volunteer Experience:</h1>
        <p>
          <ul>
            <li><strong>The Ventilator Project</strong> (now called TVP Health), Boston, MA - <i>Lead Tech Support</i> <small>(May 2020 - Jul 2020)</small></li>
            <ul>
              <li>Managed the company's Google Suite</li>
              <li>Provided technical support to in person and remote volunteers</li>
              <li>Assisted with cost effective procurement for the engineering team</li>
            </ul>
          </ul>
        </p>
      </div>
      <div className='d-flex justify-content-center'>
        <a href={resume} download>
          <button className='btn btn-light btn-lg m-5'>Download Full Resume</button>
        </a>
      </div>
    </div>
  );
}