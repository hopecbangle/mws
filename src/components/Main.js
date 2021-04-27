import React from 'react';
import { navigate } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
    <div id="fixedImg">
        <div className="container-fluid h-100 text-center">
            <div className="text-center">
                <h1>Welcome to PoweredByHope</h1>
            </div>
            <div className="text-center">
                <h2>Connecting people, one website at a time</h2>
            </div>
        </div>
        <div className="row row-height align-items-center">
            <div className="col-6">
                <button onClick={ () => navigate('WorkHistory') }>Take a look at my work history</button>
            </div>
            <div className="col-6">
                <button onClick={ () => navigate('Education') }>Education I've Received</button>
            </div>
        </div>
        <div className="row row-height justify-content-between align-items-center">
            <div className="col-5">
                <button onClick={ () => navigate('MySkills') }>The Skills I've Aquired Over the Years</button>
            </div>
            <div className="col-5">
                <button onClick={ () => navigate('References') }>References</button>  
            </div>
        </div>
        <div className="row row-height justify-content-between align-items-center">
            <div className="col-4">
                <button onClick={ () => navigate('MoreAboutMe') }>More About Me..</button>
            </div>
            <div className="col-4">
                <button onClick={ () => navigate('https://github.com/hopecbangle/mws.git') }>GitHub Projects</button>
            </div>
        </div>
    </div>    
)};

export default App;
