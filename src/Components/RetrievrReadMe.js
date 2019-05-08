import React from 'react';
import '../App.css';



export default class RetrievrReadMe extends React.Component {

  render() {
    return (
      <div className="resume">
        <h1>README</h1>
        <p>Retrievr is a React Native app with a Rails backend (hosted on Heroku). The app gives pet owners the ability to create virtual "Missing Pet Posters" that are hosted on an external web page and also gives all users the ability to scan an animal's tag (accompanying hardware with associated QR code) to notify a lost pet's owner that their pet has been found, where it was found, who found it and an immediate means of contacting the finder of the pet.</p>
        <div>
          <img src={('https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/ruby-on-rails-512.png')} alt="Rails" className="lang-icon"/>
          <img src={('https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png')} alt="React Native" className="lang-icon"/>
          <img src={('https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png')} alt="Redux" className="lang-icon"/>
          <img src={('https://cdn6.aptoide.com/imgs/c/8/f/c8f548826728f7ed9e4eaf3f7bbf5fd6_icon.png?w=240')} alt="Expo" className="lang-icon"/>
        </div>
        <h4> Ruby on Rails </h4>
        <h4> React Native </h4>
        <h4> Redux </h4>
        <h4> Expo </h4>
        <br />
        <br />
        <h3>Full readme <a href="https://github.com/elicleveland12/mod-5-final-project-retrievr" target="_blank" rel="noopener noreferrer">Here</a> </h3>
      </div>
    );
  }
}
