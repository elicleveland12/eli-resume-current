import React from 'react';
import '../App.css';



export default class HomePage extends React.Component {

  render() {
    return (
      <div className="resume">
        <div className="college-detailed">
          <div style={{order: 1}}><img src={require('../public/prof-pic.png')} alt="Clarkson" className="prof-pic" onClick={this.toggleCollegeDetails}/></div>
          <div style={{order: 2, marginTop: 40}} className="deets"><h1>Elijah Cleveland</h1>
          <h3>Full-Stack Software Engineer</h3>
          <h3>Mobile: 315-271-3133</h3></div>
        </div>
        <div>
          <h3>Summary</h3>
          <p style={{lineHeight: 1.4}}>
            Full stack web developer with a fierce enthusiasm for disruptive technologies and experienced in Ruby on Rails, JavaScript, React, Redux, and React Native, as well as a background in project management. I was initially intrigued by the power of programming during an entrepreneurial project which dealt with the commercialization of declassified Air Force Research Lab technologies.
          </p>
        </div>
        <div className="languages">
          <img src={('https://cdn.iconscout.com/icon/free/png-256/ruby-226055.png')} alt="Ruby" className="lang-icon-top"/>
          <img src={('https://png.pngtree.com/svg/20170719/91de50e59c.svg')} alt="JavaScript" className="lang-icon-top"/>
          <img src={('https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png')} alt="HTML5" className="lang-icon-top"/>
          <img src={('https://i1.wp.com/appliedparticletechnology.com/wp-content/uploads/2016/03/css-logo.png?resize=500%2C500&ssl=1')} alt="CSS" className="lang-icon-top"/>
          <img src={('https://severalnines.com/sites/default/files/postgresql_0.png')} alt="postgres" className="lang-icon-top"/>
        </div>
        <div className="frameworks">
          <img src={('https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/ruby-on-rails-512.png')} alt="Rails" className="lang-icon"/>
          <img src={('https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png')} alt="React Native" className="lang-icon"/>
          <img src={('https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png')} alt="Redux" className="lang-icon"/>
        </div>
      </div>
    );
  }
}
