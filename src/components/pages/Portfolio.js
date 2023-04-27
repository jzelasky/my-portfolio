import React from 'react';
import Project from '../Project';

const projects = [
  ["title1", "desc1", "link1", "github1", "img1"],
  ["title2", "desc2", "link1", "github1", "img1"]
]

export default function Portfolio(props) {
  console.log(props)
  
  return (
    <div className='m-5'>
      {projects.map((item) => (Project(item[0], item[1], item[2], item[3], item[4], item[5])))}
    </div>
  )
  
  // return (
  //   <div>
  //     {Project(projects)}
  //   </div>
  // )
  
 
}