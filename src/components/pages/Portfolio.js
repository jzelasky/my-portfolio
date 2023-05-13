import React from 'react';
import Project from '../Project';
import techBlogImg from '../img/portfolio-techBlog.png';
import weatherImg from '../img/portfolio-weather.png';
import teamProImg from '../img/portfolio-teamProfile.png';
import healthImg from '../img/portfolio-health.png';
import breakingImg from '../img/portfolio-breaking.png';
import buyImg from '../img/portfolio-buyNothing.png';
//IMG DEMENSIONS: 1884x880

//format: title, description, deployment, github, img
const projects = [
  ["Buy Nothing World", "Buy Nothing World is a full stack web application I developed independently. Users can share items with each other that they are getting rid of. It uses the MERN stack (MongoDB, Express.js, Node.js, and React) with GraphQL and Bootstrap and is deployed through heroku.", "https://buy-nothing-world.herokuapp.com/", "https://github.com/jzelasky/buy-nothing-world", buyImg],
  ["Cool New Tech Blog", "Cool New Tech Blog is a full stack web application that I developed independently. Users have the ability to make posts and comment on other users posts. It uses Node.js, Express.js, MySQL, and Bootstrap, and is deployed through Heroku.", "https://tech-blog-0423.herokuapp.com/", "https://github.com/jzelasky/techBlog", techBlogImg],
  ["Weather Dashboard", "Weather Dashboard is a front end web application that uses weather data from the OpenWeather API. Users can search for any city worldwide and the current weather and a 5 day forecast is displayed. I developed it independently and it uses Node.js and Bootstrap and is deployed through Github Pages.", "https://jzelasky.github.io/WeatherDashboard/", "https://github.com/jzelasky/WeatherDashboard", weatherImg],
  ["Team Profile Generator", "Team Profile Generator is a back end application that I developed independently. The user is prompted through the command line to answer questions about the employees on a team and a styled html file is produced. It uses Node.js and Bootstrap.", "", "https://github.com/jzelasky/teamProfileGenerator", teamProImg],
  ["Health Note Tracker", "Health Note Tracker is a full stack web application developed by myself and a group of classmates. Users can use the application to keep track of their health symptoms. I was mainly responsible for the back end Javascript. It uses Node.js, Express.js, mySQL, and Bootswatch and is deployed through Heroku.", "https://thawing-retreat-86324.herokuapp.com/", "https://github.com/jjsmith32199/HealthNoteTracker", healthImg],
  ["Breaking Dad", "Breaking Dad is a front end web application developed by myself and a group of classmates. Users are able to click buttons to receive a dad joke or a breaking bad quote. I was responsible for part of the front end Javascript. It uses Node.js and Bulma and is deployed through Github Pages.", "https://cellopudding.github.io/BreakingDad", "https://github.com/cellopudding/BreakingDad", breakingImg],
]

// within map: if item[2] === "" then display message instead of deployed link

export default function Portfolio(props) {
  console.log(props)
  
  return (
    <div className='m-3'>
      <h1 className='p-3 header-font-2'>Portfolio</h1>
      <div className='d-flex flex-wrap justify-content-center'>
        {projects.map((item) => (
          Project(item[0], item[1], item[2], item[3], item[4], item[5])))}
      </div>
    </div>
  )
 
}