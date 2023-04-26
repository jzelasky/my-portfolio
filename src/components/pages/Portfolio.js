import React from 'react';
import Project from '../Project';

const ex = "hello"
const projects = ['one', 'two', 'three']

export default function Portfolio(props) {
  console.log(props)
  
  return (
    <div>
      {projects.map((item) => (
        Project(item)
      ))}
    </div>
  )
  
  // return (
  //   <div>
  //     {Project(projects)}
  //   </div>
  // )
  
 
}