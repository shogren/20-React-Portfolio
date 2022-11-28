import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              In general, I don't like being contacted. But if you must:
              </p>
            </div>
          </div>

          <div class="fcf-body">

    <div id="fcf-form">
    <h3 class="fcf-h3">Contact Me</h3>

    <form id="fcf-form-id" class="fcf-form-class">
        
        <div class="fcf-form-group">
            <label for="Name" class="fcf-label">Your name</label>
            <div class="fcf-input-group">
                <input type="text" id="Name" name="Name" class="fcf-form-control" required></input>
            </div>
        </div>

        <div class="fcf-form-group">
            <label for="Email" class="fcf-label">Your email address</label>
            <div class="fcf-input-group">
                <input type="email" id="Email" name="Email" class="fcf-form-control" required></input>
            </div>
        </div>

        <div class="fcf-form-group">
            <label for="Message" class="fcf-label">Your message</label>
            <div class="fcf-input-group">
                <textarea id="Message" name="Message" class="fcf-form-control" rows="6" maxlength="3000" required></textarea>
            </div>
        </div>



        <div class="fcf-form-group">
            <button type="submit" onclick="alert()" id="fcf-button" class="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block">Send Message</button>
        </div>

    </form>
    </div>

</div>


          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>LinkedIn: 
                <a href={resumeData.linkedinId}> linkedin.com/in/jon-shogren</a>
                </h4>
                <h4>Email: 
                <a href="mailto:jon@fart.cool"> jon@fart.cool</a>
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}