import React from 'react';
//import {Link,navigate} from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';

function Education () {
    return (
    <div className="App">
      <div className="container">
        <div className="text-center">
          <h1>Degrees, Diplomas, and Certifications, oh my!</h1>
        </div>
        <div className="row">
          <div className="col-sm">
           <img src='/images/AAS.jpg' alt="AAS Degree"></img>
          </div>
          <div className="col-sm">
          <img src='/images/DigitalArts.jpg' alt="Digital Arts Diploma"></img> 
          </div>
          <div className="col-sm">
          <img src='/images/CET.jpg' alt="Certified Electronics Technician"></img>  
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="row">
          <div className="col-sm">
            <img src='/images/MoorparkCollege.jpg' alt="Local Area Networks"></img>
          </div>
          <div className="col-sm">
            <img src='/images/OSHA-10.jpg' alt="OSHA-10"></img> 
          </div>
          <div className="col-sm">
            <img src='/images/PhiThetaKappa.jpg' alt="Phi Theta Kappa Honor Society"></img>
          </div>
        </div>
      </div>
    </div>
  )};

  export default Education;