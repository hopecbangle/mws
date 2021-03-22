import React from 'react';
import { navigate } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';

function MySkills () {
    return (
    <div  className="App">
      <div className="container">
        <div className="text-center">
          <h1>Here is a List of My Skills</h1>
        </div>
        <div className="row">
          <div className="col-sm">
            <h4>Microsoft Windows Operating Systems</h4>
            <h4>Microsoft Office Suites</h4>
            <h4>Adobe Acrobat</h4>
            <h4>Adobe Dreamweaver</h4>
            <h4>Adobe Photoshop</h4>
            <h4>Adobe InDesign</h4>
            <h4>Adobe Illustrator</h4>
          </div>
          <div className="col-sm">
            <h4>C++</h4>
            <h4>C#</h4>
            <h4>Allen Bradley PLC's</h4>
            <h4>HTML</h4>
            <h4>CSS</h4>
            <h4>JavaScript</h4>
            <h4>React</h4>
            <h4>MongoDB</h4>
            <h4>Express</h4>
            <h4>Node.js</h4>
          </div>
        </div>  
      </div>
      <button onClick={ () => navigate('Main') }>Back to Home</button>
    </div>
  )};

  export default MySkills;