import React from 'react';
import '../App.css';

export default class ResumeLinks extends React.Component {

  state = {
    topRow: true,
    middleRow: true,
    bottomRow: true
  }

  toggleTopRow = () => {
    this.setState({topRow: !this.state.topRow})
  }

  toggleMiddleRow = () => {
    this.setState({middleRow: !this.state.middleRow})
  }

  toggleBottomRow = () => {
    this.setState({bottomRow: !this.state.bottomRow})
  }

  renderTopRow = () => {
    if (!this.state.topRow) {
      return (<div className="top-row" onClick={this.toggleTopRow}>
        <h1 style={{color: 'white', paddingTop: 60}}>Links</h1>
      </div>)
    } else {
      return (<div>
        <a href="mailto:elicleveland12@gmail.com"><img src={('https://cdn4.iconfinder.com/data/icons/free-colorful-icons/360/gmail.png')} alt="Gmail" className="icon"/></a>
        <a href="https://www.linkedin.com/in/elijah-cleveland/" target="_blank"><img src={('https://cdn4.iconfinder.com/data/icons/flat-social-media-icons-1/512/linkedin-2.png')} alt="LinkedIn" className="icon"/></a>
        <a href="https://github.com/elicleveland12?tab=repositories" target="_blank"><img src={('http://cdn.onlinewebfonts.com/svg/img_326384.png')} alt="GitHub" className="icon"/></a>
      </div>)
    }
  }

  renderMiddleRow = () => {
    if (!this.state.middleRow) {
      return (<div className="middle-row" style={{height: 160, backgroundColor: 'rgb(195, 196, 206, 0.8)'}} onClick={this.toggleMiddleRow}>
        <h1 style={{color: 'white', paddingTop: 60}}>Projects</h1>
      </div>)
    } else {
      return (<div>
        <a href="https://github.com/elicleveland12/mod-5-final-project-retrievr" target="_blank"><img src={require('../public/refresh_img.png')} alt="Retrievr" className="icon required"/></a>
        <a href="https://github.com/elicleveland12/softipy-front-end" target="_blank"><img src={('https://iconsplace.com/wp-content/uploads/_icons/800080/256/png/spotify-icon-13-256.png')} alt="Softipy" className="icon"/></a>
        <a href="https://github.com/elicleveland12/rails-project-mode-nyc-web-career-010719" target="_blank"><img src={require('../public/oyl.jpeg')} alt="Oyl" className="icon required"/></a>
      </div>)
    }
  }

  renderBottomRow = () => {
    if (!this.state.bottomRow) {
      return (<div className="bottom-row" style={{height: 160, backgroundColor: 'rgb(195, 196, 206, 0.8)'}} onClick={this.toggleBottomRow}>
        <h1 style={{color: 'white', paddingTop: 60}}>Blogs</h1>
      </div>)
    } else {
      return (<div>
        <a href="http://oyl.io/wireframing/" target="_blank"><img src={('https://static.thenounproject.com/png/50320-200.png')} alt="Wirefram blog" className="icon"/></a>
        <a href="http://oyl.io/domain-to-champagne/" target="_blank"><img src={('https://img.icons8.com/ios/420/internet.png')} alt="Deploying blog" className="icon"/></a>
        <a href="http://oyl.io/my-introduction-to-code/" target="_blank"><img src={('https://image.flaticon.com/icons/png/512/69/69084.png')} alt="Intro to code" className="icon"/></a>
      </div>)
    }
  }

  render() {
    return (
      <div className="resume-links">
        {this.renderTopRow()}
        {this.renderMiddleRow()}
        {this.renderBottomRow()}
      </div>
    );
  }
}
