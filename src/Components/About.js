import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               I'm a Software Engineer based outside of Atlanta, Georgia.<br></br> When I'm not staring at a computer, I'm chasing my kids around or playing hockey. 
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>Jonathan Shogren</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span> <a href="https://fart.cool">fart.cool</a> </span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}