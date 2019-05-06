import React, {Fragment} from 'react';
import '../App.css';

import ResumeLinks from './ResumeLinks'
import HomeInfo from './HomeInfo'

export default class VideoDemo extends React.Component {

  renderLinkBox = () => {
    if (this.props.resume) {
      return (<ResumeLinks />)
    } else if (this.props.retrievr) {
      return ( <Fragment>
          <iframe title="Retrievr" width="680" height="315" src="https://www.youtube.com/embed/MVQRr1Iry10" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <iframe title="Retrievr-scan" width="680" height="315" src="https://www.youtube.com/embed/KriGTtZb5H8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="scanner-vid"></iframe>
        </Fragment>
      )
    } else if (this.props.softipy) {
      return (<Fragment>
          <iframe title="Softipy-Sivan" width="680" height="315" src="https://www.youtube.com/embed/ktvqV3r1Rus" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Fragment>
      )
    } else if (this.props.oyl) {
      return (<Fragment>
          <iframe title="Oyl" width="680" height="315" src="https://www.youtube.com/embed/1UR4iuib50E" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Fragment>
      )
    } else {
      return (<HomeInfo />)
    }
  }

  render() {
    return (
      <div className="video-demo-container">
        {this.renderLinkBox()}
      </div>
    );
  }
}
