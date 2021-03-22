import React from 'react';
import { navigate } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';

function Recommend () {
   return (
    <div  className="App">
      <div className="container">
        <div className="text-center">
          <h1>Respect I Earned</h1>
        </div>
        <div className="row">
          <div className="col-sm">
            <h4>Mikel Douglas</h4>
            <h4>College of Western Idaho Faculty</h4>
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

  export default Recommend;