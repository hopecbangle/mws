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
            <h2>Position: Robotics Systems Engineer</h2>
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
            <p>
              At the House of Design, I started as an electrical assemble technician.  Through connecting high and low voltage components based on schematics, my exceptional attention to detail became noticed.  Because of that and my hard work, I was promoted in under a year, to a Robotics System Engineer.  As a Robotics System Engineer, I helped increase OEE by programming robot target points to be closer and more precise.  I was also tasked with creating pneumatic drawings that had never been documented previously for customer projects.
            </p>
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
            <p>
              Turn-Key Medical gave me the opportunity to see inside the heath industry by being dispatched to hospitals where I had to troubleshoot and repair mammography machines, CT scanners, and mobile x-ray units based on a customer description of the problem.  I performed periodic maintenance so the equipment could perform at an optimal level without causing patient appointments to be rescheduled.  Documenting the work I performed at a customer site was important so the customer could be billed appropriately, especially when I needed to order parts to replace damaged ones.
            </p>
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
            <p>
              The design work I was able to do at Roger’s Benefit Group was an exciting time for me.  I used my technical skills to maintain the servers in the office as well as the users and their computers.  I was fortunate enough to assist with logo updating and co-branding for heath insurance carriers on our local website.  I was tasked daily with designing informational emails and broadcasting those emails to more than 250 associates.  I also created documentation for daily procedures for reference and future consistency.
            </p>
          </div>
        </div>
      </div>
    </div>
  )};

  export default WorkHistory;