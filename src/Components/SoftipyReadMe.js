import React from 'react';
import '../App.css';



export default class SoftipyReadMe extends React.Component {

  render() {
    console.log("landed");
    return (
      <div className="resume">
        <h1>README</h1>
        <p>SoftiPy is a music streaming service and playlist building application, built on a React front end and a Ruby on Rails back end. Upon login, a User will see their dashboard, where they can see all of the users, a search bar, and a list of their own playlists. We used Deezer's open source song API in order to allow for a user to search for any song by the keyword of their choosing. Users can also create and edit playlists by dragging songs into the desired playlist. Users are also able to click on any other user and see their playlists, and add it into their own playlists, allowing them to edit that playlist without affecting the original users playlist.</p>
        <div>
          <img src={('https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/ruby-on-rails-512.png')} alt="Rails" className="lang-icon"/>
          <img src={('https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png')} alt="React" className="lang-icon"/>
          <img src={('http://www.icons101.com/icon_ico/id_78109/Deezer_Round_Color_JasonZigrino.ico')} alt="Deezer" className="lang-icon"/>
          <img src={('https://i1.wp.com/appliedparticletechnology.com/wp-content/uploads/2016/03/css-logo.png?resize=500%2C500&ssl=1')} alt="Ruby" className="lang-icon"/>
        </div>
        <h4> Ruby on Rails </h4>
        <h4> React </h4>
        <h4> Deezer API </h4>
        <h4> Custom CSS </h4>
        <br />
        <br />
        <h3>Full readme <a href="https://github.com/elicleveland12/softipy-front-end" target="_blank">Here</a></h3>
      </div>
    );
  }
}
