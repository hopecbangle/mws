import React from 'react';
import Main from './components/Main'
import WorkHistory from './components/WorkHistory';
import MySkills from './components/MySkills';
import MoreAboutMe from './components/MoreAboutMe';
import Education from './components/Education';
import References from './components/Recommend';
import { Router } from '@reach/router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from './components/Footer';


function App() {
  return (
      <div className="App">
        <Router>
          <Main path='/Main' />
          <WorkHistory path='/WorkHistory' />
          <MySkills path='/MySkills' />
          <MoreAboutMe path='/MoreAboutMe' />
          <Education path='/Education' />
          <References path='/References' />
        </Router>
        
      </div>
    
  )};

export default App;
