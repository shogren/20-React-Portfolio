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
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>LinkedIn:
                <a href={resumeData.linkedinId}>linkedin.com/in/jon-shogren</a>
                </h4>
                <h4>Email:
                <a href="mailto:jon@fart.cool">jon@fart.cool</a>
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}