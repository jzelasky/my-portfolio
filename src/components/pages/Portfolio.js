import React from 'react';
import Project from '../Project';

const projects = [
  ["Title", "This is a placeholder description. It needs to be a few sentences long and list the technologies used.", "link1", "github1", "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"],
  ["Title", "This is a placeholder description. It needs to be a few sentences long and list the technologies used.", "link1", "github1", "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"],["Title", "This is a placeholder description. It needs to be a few sentences long and list the technologies used.", "link1", "github1", "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"],["Title", "This is a placeholder description. It needs to be a few sentences long and list the technologies used.", "link1", "github1", "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"],["Title", "This is a placeholder description. It needs to be a few sentences long and list the technologies used.", "link1", "github1", "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"],["Title", "This is a placeholder description. It needs to be a few sentences long and list the technologies used.", "link1", "github1", "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"],
]

export default function Portfolio(props) {
  console.log(props)
  
  return (
    <div className='m-5 d-flex flex-wrap justify-content-center'>
      {projects.map((item) => (Project(item[0], item[1], item[2], item[3], item[4], item[5])))}
    </div>
  )
 
}