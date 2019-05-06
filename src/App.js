import React from 'react';
import './App.css';

import Container from './Components/Container'
import OtherContainer from './Components/OtherContainer'
import HiddenMenu from './Components/HiddenMenu'
import VideoDemo from './Components/VideoDemo'

export default class App extends React.Component {

  state = {
    sideBar: false,
    resume: false,
    retrievr: false,
    softipy: false,
    oyl: false,
  }

  toggleSideBar = () => {
    this.setState({sideBar: !this.state.sideBar})
  }

  toggleResume = () => {
    this.setState({
      resume: !this.state.resume,
      retrievr: false,
      softipy: false,
      oyl: false,
    })
  }

  toggleRetrievr = () => {
    this.setState({
      retrievr: !this.state.retrievr,
      resume: false,
      softipy: false,
      oyl: false,
    })
  }

  toggleSoftipy = () => {
    this.setState({
      softipy: !this.state.softipy,
      retrievr: false,
      resume: false,
      oyl: false,
    })
  }

  toggleOyl = () => {
    this.setState({
      oyl: !this.state.oyl,
      retrievr: false,
      softipy: false,
      resume: false,
    })
  }

  renderSideBar = () => {
    if (this.state.sideBar) {
      return (<Container toggleSideBar={this.toggleSideBar} sideBarState={this.state.sideBar} toggleResume={this.toggleResume} resume={this.state.resume} toggleRetrievr={this.toggleRetrievr} retrievr={this.state.retrievr} toggleSoftipy={this.toggleSoftipy} softipy={this.state.softipy} toggleOyl={this.toggleOyl} oyl={this.state.oyl} />)
    } else {
      return (<HiddenMenu toggleSideBar={this.toggleSideBar} sideBarState={this.state.sideBar}/>)
    }
  }

  render() {
    return (
      <div className="App">
        {this.renderSideBar()}
        <OtherContainer resume={this.state.resume} retrievr={this.state.retrievr} softipy={this.state.softipy} oyl={this.state.oyl} />
        <VideoDemo resume={this.state.resume} retrievr={this.state.retrievr} softipy={this.state.softipy} oyl={this.state.oyl} />
      </div>
    );
  }
}
