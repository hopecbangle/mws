import React from 'react';
import { navigate } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';

function Recommend () {
   return (
    <div id="fixedImg">
      <button id="homeButton" onClick={ () => navigate('Main') }>Back to Home</button>
      <div className="container">
        <div className="text-center">
          <h1>Respect I Earned...</h1>
        </div>
        <div className="row">
          <div className="col-6 align-items-left">
            <p>Mikel Douglas</p>
            <p>College of Wester Idaho Faculty</p>
          </div>
          <div className="col-6 align-items-right">
          <img src='/images/MDouglas.jpg' alt="Mike's Reference"></img>  
          </div>
        </div>
        <div className="row">
          <div className="col-6 align-items-left">
        </div>
          <div className="col-6 align-items-right"> 
          </div>
        </div>
      </div>
    </div>
  )};

  export default Recommend;