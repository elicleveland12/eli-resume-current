import React from 'react';
import '../App.css';

import Resume from './Resume'
import RetrievrReadMe from './RetrievrReadMe'
import SoftipyReadMe from './SoftipyReadMe'
import HomePage from './HomePage'
import OylReadMe from './OylReadMe'

export default class OtherContainer extends React.Component {

  renderResume = () => {
    if (this.props.resume) {
      return (<Resume />)
    } else if (this.props.retrievr) {
      return (<RetrievrReadMe />)
    } else if (this.props.softipy) {
      return (<SoftipyReadMe />)
    } else if (this.props.oyl) {
      return (<OylReadMe />)
    } else {
      return (<HomePage />)
    }
  }

  render() {
    return (
      <div className="container">
        {this.renderResume()}
      </div>
    );
  }
}
