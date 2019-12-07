import React from 'react';
import '../App.css';



export default class Resume extends React.Component {

  render() {
    return (
      <div className="resume">
        <a href="https://drive.google.com/open?id=1c7PFWg0tk1Q9U6kDNYbryOMtG0CK5T8F" download="Elijah-Cleveland-Resume" target="_blank" rel="noopener noreferrer"><img src={require('../public/resume.png')} alt="Hired" className="resume-doc"/></a>
      </div>
    );
  }
}
