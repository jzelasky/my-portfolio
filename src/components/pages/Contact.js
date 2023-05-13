import React from 'react';

export default function Contact() {
  return (
    <div className="formStyles m-3">
      <h1 className="p-3 header-font-2">Contact</h1>
      <div className='d-flex justify-content-center body-font-1'>
        <ul>
          <li><strong>Phone:</strong> (860) 884-0629</li>
          <li><strong>Email:</strong> <a href="mailto:jzelasky@gmail.com" target="_blank" rel="noreferrer"> jzelasky@gmail.com</a></li>
          <li><strong>LinkedIn:</strong> <a href="https://linkedIn.com/in/jessica-zelasky" target="_blank" rel="noreferrer">linkedin.com/in/jessica-zelasky</a></li>
          <li><strong>Github:</strong> <a href="https://github.com/jzelasky" target="_blank" rel="noreferrer">github.com/jzelasky</a></li>
        </ul>
      </div>
    </div>
  );
}