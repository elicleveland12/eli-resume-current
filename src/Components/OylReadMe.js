import React from 'react';
import '../App.css';



export default class OylReadMe extends React.Component {

  render() {
    return (
      <div className="resume">
        <h1>README</h1>
        <p>Oyl is a Ruby on Rails application that is based on the concept of connecting drivers with more trustworthy and painless vehicle maintenance, specifically oil changes. Users and technicians are able to sign in on the same home page
        and are granted different access depending on the type of user. A user has the ability to add vehicles to their profile and schedule a service at a specific time and place that would be visible to technicians. When technicians sign in,
        they are able to view all of the users' appointment requests and accept the requests that they will be available to complete.</p>
        <div>
          <img src={('https://cdn.iconscout.com/icon/free/png-256/ruby-226055.png')} alt="Ruby" className="lang-icon"/>
          <img src={('https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/ruby-on-rails-512.png')} alt="Rails" className="lang-icon"/>
          <img src={('https://i1.wp.com/appliedparticletechnology.com/wp-content/uploads/2016/03/css-logo.png?resize=500%2C500&ssl=1')} alt="Ruby" className="lang-icon"/>
        </div>
        <h4> Ruby </h4>
        <h4> Ruby on Rails </h4>
        <h4> Custom CSS </h4>
        <br />
        <br />
        <h3>Full readme <a href="https://github.com/elicleveland12/softipy-front-end" target="_blank" rel="noopener noreferrer">Here</a></h3>
      </div>
    );
  }
}
