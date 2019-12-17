import React from 'react';
import '../App.css';



export default class Container extends React.Component {

  render() {
    return (
      <div className="sideContainer" onMouseLeave={this.props.toggleSideBar}>
        <img src={require('../public/resume.jpeg')} alt="resume" className="trigger-icons resume-button" onClick={this.props.toggleResume}/>
        <p>____________</p>
        <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/b0/7d/87/b07d8707-36c8-021d-c40f-e8eebccaa811/Icon-83.5@2x.png.png/75x9999bb.png" alt="retrievr" className="trigger-icons retrievr-button" onClick={this.props.toggleRetrievr}/>
        <img src={require('../public/MockupLogo.gif.png')} alt="Blushing Beaut" className="trigger-icons softipy-button" onClick={this.props.toggleSoftipy}/>
        <img src={require('../public/oyl.jpeg')} alt="oyl" className="trigger-icons oyl-button" onClick={this.props.toggleOyl}/>
      </div>
    );
  }
}
