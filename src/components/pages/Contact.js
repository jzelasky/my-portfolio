import React from 'react';

export default function Contact() {
  return (
    <div className="formStyles m-3">
      <h1 className="p-3 header-font-2">Contact</h1>
      <div className='d-flex justify-content-center'>
      <form className='p-4 header-font-3 form'>
        <div className='form-group form'>
          <label for="inputName" className='form'>Name</label>
          <input className='form-control ' id='inputName' placeholder="Enter Name"></input>
        </div>
        <div className='form-group mt-3 form'>
          <label for="inputEmail" className='form'>Email address</label>
          <input type="email" className='form-control' id='inputEmail' placeholder="Enter Email"></input>
        </div>
        <div className='form-group mt-3 form'>
          <label for="inputMessage" className='form'>Message</label>
          <input className='form-control' id='inputMessage' placeholder="Enter Message" ></input>
        </div>
        <button type="submit" className="btn btn-light mt-3">Submit</button>
      </form>
      </div>
    </div>
  );
}