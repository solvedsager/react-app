import React, { Component } from 'react';
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
  bounce: {
    animation: 'x 10s',
    animationName: Radium.keyframes(bounce, 'bounce')
  }
}

export default class About extends Component {

  render() {

    let resumeData = this.props.resumeData;

    return (
      <section id="about">
         <div className="row">
         <StyleRoot>
           <div className="three columns test " style={styles.bounce}>
              <img className="profile-pic"  src="images/profilepic.jpg" alt="" />
           </div>
        </StyleRoot>


            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>{resumeData.email}</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}
