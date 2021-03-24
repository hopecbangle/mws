import React from 'react';
import { navigate } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';

function MoreAboutMe () {
    return (
    <div id="fixedImg">
      <button id="homeButton" onClick={ () => navigate('Main') }>Back to Home</button>
      <div className="container">
        <div className="text-center">
          <h1>Here's a little more information about me...</h1>
        </div>
        <div className="row">
          <p>Hello,</p>
          <p>
            Thank you for your time and interest in getting to know me.  I have a broad range of technical skills which I enjoy expanding on a consistent basis.  I am seeking a full-time position with a stable company who will help me enter the next phase of my career.  
            My career began with computer networking, then transitioned into telecommunications, and continued with web design.  I took some time off to raise my young children.  Then, decided to re-insert myself into the workforce by updating my technical skills.  I went back to college at the College of Western Idaho and graduated with an associate degree in applied science from the Advanced Mechatronics and Engineering Technology program.  I learned so much during my time at CWI, but surprisingly fell in love with programming.  I touched on a natural talent I didn't know was there.
          </p>
          <p>
            My work history has given me experience working with teams and independently to reach project goals coinciding with mission statements.  I believe my optimism, patience, and determination, are huge benefits in any situation and appreciated by those around me.  My rigid work ethic guarantees that whatever position I fill, it will be done to the best of my ability. I have been awarded Employee of the Month and Staff Appreciation awards from previous employers and graduated College of Western Idaho with a 4.0 grade average.  My goal has always been to exceed the expectations of my employer and I am eager to exceed yours.
            Email is the best and preferred method of contact.  You can find my contact information below.  I would enjoy speaking with you and learning on how we can both benefit from a professional relationship.
          </p>
        </div>
        <div className="row myFooter">
          <h4>Hope Collins Bangle <span>| </span>Email: HopeCBangle@gmail.com <span>| </span>Cell: (555) 123-1234</h4>
        </div>  
      </div>
      
    </div>
  )};

  export default MoreAboutMe;