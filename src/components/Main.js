import React from 'react';
//import WorkHistory from 'WorkHistory';
//import MySkills from './components/MySkills';
//import MoreAboutMe from './components/MoreAboutMe';
//import Education from './components/Education';
//import References from './components/Recommend';
import { navigate } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
      <div className="App">
        <div className="container">
          <div className="text-center">
            <h1>Welcome to PoweredByHope</h1>
          </div>
          <div className="text-center">
            <h2 >Connecting people, one website at a time</h2>
          </div>
          <div className="row">
            <div className="col-sm">
              <button onClick={ () => navigate('WorkHistory') }>Take a look at my work history</button>
            
            </div>
            <div className="col-sm">
                Row1, column2
              
            </div>
            <div className="col-sm">
            <button onClick={ () => navigate('Education') }>Education I've Received</button>
              
            </div>
          </div>
            <div className="row">
              <div className="col-sm">
              <button onClick={ () => navigate('MySkills') }>The Skills I've Aquired Over the Years</button>
              </div>
              <div className="col-sm">
              Row2, column2 
              </div>
              <div className="col-sm">
              <button onClick={ () => navigate('References') }>References</button>  
              </div>
            </div>
            <div className="row">
              <div className="col-sm">
              <button onClick={ () => navigate('MoreAboutMe') }>More About Me..</button>
               
              </div>
              <div className="col-sm">
              Row3, column2
                
              </div>
              <div className="col-sm">
              <button onClick={ () => navigate('https://github.com/hopecbangle/MyWebsite.git') }>GitHub Projects</button>
              </div>
              <div className="row">
                <div className="col-sm">
             Row4, column1    
                </div>
                <div className="col-sm">
                Row4, column2
                </div>
                <div className="col-sm">
                Row4, column3  
                </div>
            </div>  
          </div>
        </div>
      </div>
    
  )};

export default App;
