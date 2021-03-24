import React from 'react';
import { navigate } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';

function WorkHistory () {
  
  return (
      
    <div className="App">
      <button id="homeButton" onClick={ () => navigate('Main') }>Back to Home</button>
      <div className="container">
        <div className="row">
            <div className="col text-center">
            <h1>My Career Journey</h1>
          </div> 
        </div>
        <div className="row">
          <div className="col text-center">
            <h2>Position: Electrical Assembly Technician to Robotics Systems Engineer</h2>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <h3>House of Design - Nampa, ID</h3>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <h4>September 2019 - March 2021</h4>
          </div>
        </div>
        <div className="row">
          <div className="col align-items-left">
            <ul>
              <li>C#-like programming with RAPID code for robots</li>
              <li>B&R PLC Programming</li>
              <li>Maintained robotic mechanical components</li>
              <li>Reading electrical schematics</li>
              <li>Mapping pneumatic lines for documented output</li>
              <li>Wiring electrical panels for high and low voltage components</li>
            </ul>
          </div>
          </div>
          <div className="row">
          <div className="col text-center">
            <h2>Position: Field Service Engineer</h2>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <h3>Turn-Key Medical - Meridian, ID</h3>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <h4>January 2019 - July 2019</h4>
          </div>
        </div>
            <div className="row">
              <div className="col align-items-left">
                <ul>
                  <li>Dispatched to hospitals for repair service calls</li>
                  <li>Completed periodic maintenance on CT scanners, mammography machines, and mobile x-ray units</li>
                  <li>Completed customer service records to document the work performed</li>
                  <li>Ordered new parts to replace damaged ones</li>
                </ul>
              </div>
            </div>
            <div className="row">
          <div className="col text-center">
            <h2>Position: Web/Graphic Designer</h2>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <h3>Roger's Benefit Group - Carlsbad, CA</h3>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <h4>June 2012 - August 2013</h4>
          </div>
        </div>
          <div className="row">
            <div className="col align-items-left">
              <ul>
                <li>Worked remotely to maintain local branch website</li>
                <li>Maintained local servers and provided technical supprot for the office</li>
                <li>Completed logo updating and co-branding for health insurance carriers on local website</li>
                <li>Designed email in iContact and Adobe Dreamweaver for broadcasting to 250 associates</li>
                <li>Created documentation for daily processes</li>
              </ul>
            </div>
          </div>  
      </div>
    </div>
  )};

  export default WorkHistory;