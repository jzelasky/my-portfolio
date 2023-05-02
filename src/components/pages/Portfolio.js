import React from 'react';
import Project from '../Project';
import techBlogImg from '../img/portfolio-techBlog.png';
import weatherImg from '../img/portfolio-weather.png';
import teamProImg from '../img/portfolio-teamProfile.png';
import socialImg from '../img/portfolio-socialAPI.png';
import healthImg from '../img/portfolio-health.png';
import breakingImg from '../img/portfolio-breaking.png';

const projects = [
  ["Cool New Tech Blog", "Cool New Tech Blog is a full stack web application that I developed independently. Users have the ability to make posts and comment on other users posts. It uses Node.js, Express.js, MySQL, and Bootstrap, and is deployed through Heroku.", "https://tech-blog-0423.herokuapp.com/", "https://github.com/jzelasky/techBlog", techBlogImg],
  ["Weather Dashboard", "Weather Dashboard is a front end web application that uses weather data from the OpenWeather API. Users can search for any city worldwide and the current weather and a 5 day forecast is displayed. I developed it independently and it uses Node.js and Bootstrap and is deployed through Github Pages.", "https://jzelasky.github.io/WeatherDashboard/", "https://github.com/jzelasky/WeatherDashboard", weatherImg],
  ["Team Profile Generator", "Team Profile Generator is a back end application that I developed independently. The user is prompted through the command line to answer questions about the employees on a team and a styled html file is produced. It uses Node.js and Bootstrap.", "", "https://github.com/jzelasky/teamProfileGenerator", teamProImg],
  ["Social Network API", "Social Network API is the back end of a potential full stack social network web application. Users have the ability to be friends with other users and post thoughts and respond to other users thoughts. It uses Node.js, Express.js, and MongoDB.", "", "https://github.com/jzelasky/socialNetworkAPI", socialImg],
  ["Health Note Tracker", "Health Note Tracker is a full stack web application developed by myself and a group of classmates. Users can use the application to keep track of their health symptoms. I was mainly responsible for the back end Javascript. It uses Node.js, Express.js, mySQL, and Bootswatch and is deployed through Heroku.", "https://thawing-retreat-86324.herokuapp.com/", "https://github.com/jjsmith32199/HealthNoteTracker", healthImg],
  ["Breaking Dad", "Breaking Dad is a front end web application developed by myself and a group of classmates. Users are able to click buttons to receive a dad joke or a breaking bad quote. I was responsible for part of the front end Javascript. It uses Node.js and Bulma and is deployed through Github Pages.", "https://cellopudding.github.io/BreakingDad", "https://github.com/cellopudding/BreakingDad", breakingImg],
]

// within map: if item[2] === "" then display message instead of deployed link

export default function Portfolio(props) {
  console.log(props)
  
  return (
    <div className='m-3'>
      <h1 className='p-3 header-font-2'>Portfolio</h1>
      <div className='m-5 d-flex flex-wrap justify-content-center'>
        {projects.map((item) => (
          Project(item[0], item[1], item[2], item[3], item[4], item[5])))}
      </div>
    </div>
  )
 
}