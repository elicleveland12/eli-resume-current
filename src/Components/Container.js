import React from 'react';
import '../App.css';



export default class Container extends React.Component {

  render() {
    return (
      <div className="sideContainer" onMouseLeave={this.props.toggleSideBar}>
        <img src={require('../public/resume.jpeg')} alt="resume" className="trigger-icons resume-button" onClick={this.props.toggleResume}/>
        <p>____________</p>
        <img src={require('../public/refresh_img.png')} alt="retrievr" className="trigger-icons retrievr-button" onClick={this.props.toggleRetrievr}/>
        <img src={('https://iconsplace.com/wp-content/uploads/_icons/800080/256/png/spotify-icon-13-256.png')} alt="softipy" className="trigger-icons softipy-button" onClick={this.props.toggleSoftipy}/>
        <img src={require('../public/oyl.jpeg')} alt="oyl" className="trigger-icons oyl-button" onClick={this.props.toggleOyl}/>
      </div>
    );
  }
}
