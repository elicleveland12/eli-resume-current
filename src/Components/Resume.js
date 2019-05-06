import React from 'react';
import '../App.css';



export default class Resume extends React.Component {

  render() {
    return (
      <div className="resume">
        <a href="https://drive.google.com/file/d/1c7PFWg0tk1Q9U6kDNYbryOMtG0CK5T8F/view?usp=sharing" download="Elijah-Cleveland-Resume" target="_blank"><img src={require('../public/resume.png')} alt="Hired" className="resume-doc"/></a>
      </div>
    );
  }
}
