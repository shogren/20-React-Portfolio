import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out The Projects I've Been Working On:</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    
                      <img src={`${item.imgurl}`} alt="Screenshot of the project." className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h4><a href={item.github}>{item.name}</a></h4>
                          <p>{item.description}</p>
                          <a href={item.github}>{item.name}</a>
                        </div>
                      </div>
                    
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
      <div className='project-list'>
        <h3>Links:</h3>
        <br></br>
        <ul>
          <li><h4>Employee Tracker</h4></li>
          <li><a href="https://github.com/shogren/12-Employee-Tracker">Github Repo</a></li>
          <li><p>(Command line tool. Does not have a live site)</p></li>
          <li><h4>Recipe Finder</h4></li>
          <li><a href="https://github.com/shogren/Project-1-Recipe-finder">Github Repo</a></li>
          <li><a href="https://peytoncast.github.io/Project-1-Recipe-finder/">Live Site</a></li>
          <li><h4>Weather Dashboard</h4></li>
          <li><a href="https://github.com/shogren/06-Weather-Dashboard">Github Repo</a></li>
          <li><a href="https://shogren.github.io/06-Weather-Dashboard/">Live Site</a></li>
          <li><h4>Workday Scheduler</h4></li>
          <li><a href="https://github.com/shogren/05-Work-Day-Scheduler">Github Repo</a></li>
          <li><a href="https://shogren.github.io/05-Work-Day-Scheduler/">Live Site</a></li>
          <li><h4>Password Generator</h4></li>
          <li><a href="https://github.com/shogren/03-JavaScript-Password-Generator">Github Repo</a></li>
          <li><a href="https://shogren.github.io/03-JavaScript-Password-Generator/">Live Site</a></li>
          <li><h4>BattleSnake</h4></li>
          <li><a href="https://github.com/shogren/battlesnake">Github Repo</a></li>
          <li><a href="https://play.battlesnake.com/">Live Site</a></li>
        </ul>
      </div>
  </section>
        );
  }
}