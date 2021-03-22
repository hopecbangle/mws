import React from 'react';
import { navigate } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';

function MoreAboutMe () {
    return (
    <div  className="App">
      <div className="container">
        <div className="text-center">
          <h1>Here's a little more information about me...</h1>
        </div>
        <div className="row">
          <div className="col-sm">
            
          </div>
          <div className="col-sm">
            
          </div>
          <div className="col-sm">
           
          </div>
        </div>
      </div>
      <button onClick={ () => navigate('Main') }>Back to Home</button>
    </div>
  )};

  export default MoreAboutMe;