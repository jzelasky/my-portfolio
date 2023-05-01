import React from 'react';

export default function Contact() {
  return (
    <div className="formStyles">
      <h1 className="m-3 header-font-2">Contact</h1>
      <form className='m-3 body-font-1'>
        <div className='form-group formStyles'>
          <label for="inputName">Name</label>
          <input className='form-control ' id='inputName' placeholder="Enter Name"></input>
        </div>
        <div className='form-group mt-3'>
          <label for="inputEmail">Email address</label>
          <input type="email" className='form-control' id='inputEmail' placeholder="Enter Email"></input>
        </div>
        <div className='form-group mt-3'>
          <label for="inputMessage">Message</label>
          <input className='form-control' id='inputMessage' placeholder="Enter Message" ></input>
        </div>
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  );
}