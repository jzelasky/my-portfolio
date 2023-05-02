import React from 'react';
import resume from '../files/Resume-2023.pdf'

export default function Resume() {
  return (
    <div>
      <h1 className='p-3 header-font-2'>Resume</h1>
      <div className='body-font-2 m-3'>
        <p>
          <strong>Professional Summary: </strong>Full stack web developer with a background in mathematics. Trained at the University of Connecticut’s coding boot camp and earned a certificate in full-stack web development. Innovative problem-solver passionate about developing web apps. Strengths in creativity, logic, and building projects from ideation to execution.
        </p>
        <p>
          <strong>Education: </strong>
          <ul>
            <li>University of Connecticut, Remote - <i>Certificate in Full Stack Web Development</i> (Nov 2022 - May 2023)</li>
            <li>University of Connecticut, Storrs, CT - <i>Bachelor of Arts in Mathematics</i> (Jan 2017 - Dec 2021)</li>
          </ul>
        </p>
        <p>
          <strong>Technical Skills: </strong>
          <ul>
            <li>Languages: JavaScript ES6+, CSS3, HTML5, mySQL, MongoDB</li>
            <li>Applications: Github, VS Code, Insomnia, Heroku, GraphQL</li>
            <li>Tools: Bootstrap, jQuery, Node.js, Express.js, Sequlize, Handlebars, Mongoose, React</li>
          </ul>
        </p>
        <p>
          <strong>Work Experience:</strong>
          <ul>
            <li>Robert Half, Remote - <i>Vendor Invoicing Specialist (Temporary)</i> (Aug 2022 - May 2023)</li>
              <ul>
                <li>Entered vendor invoices accurately into online accounting system</li>
              </ul>
            <li>Instacart, Various locations - <i>Shopper/Delivery Driver</i> (Jan 2021 - Aug 2022)</li>
              <ul>
                <li> Shopped for customer's groceries efficiently</li>
                <li>Delivered customer's orders on time</li>
                <li>Achieved a 4.78/5.00 average customer rating</li>
              </ul>
          </ul>
        </p>
        <p>
          <strong>Volunteer Experience:</strong>
          <ul>
            <li><strong>The Ventilator Project</strong> (now called TVP Health), Boston, MA - <i>Lead Tech Support</i> (May 2020 - Jul 2020)</li>
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