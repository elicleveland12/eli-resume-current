import React, {Fragment} from 'react';
import '../App.css';

import ResumeLinks from './ResumeLinks'
import HomeInfo from './HomeInfo'

export default class VideoDemo extends React.Component {

  state = {
    hover: false
  }

  renderLinkBox = () => {
    if (this.props.resume) {
      return (<ResumeLinks />)
    } else if (this.props.retrievr) {
      return ( <Fragment>
          <iframe title="Retrievr" width="680" height="315" src="https://www.youtube.com/embed/MVQRr1Iry10" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <div style={{width: 680, height: 315, display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}} onMouseEnter={()=>this.setState({hover: true})} onMouseLeave={()=>this.setState({hover: false})}>
            {this.state.hover ?
              <div className="hover-class" style={{position: 'absolute', width: 680, height: 315, backgroundColor: 'rgba(0, 184, 148,0.7)', borderRadius: 10, display: 'flex', justifyContent: 'center', alignItems: 'center'}} onClick={()=>window.open("http://www.retrievrapp.com")}>
                <h1 style={{color: 'white'}}>Visit Retrievrapp.com</h1>
              </div>
            :
              null
            }
            <img src={require('../public/IMG_0064.png')} alt="app img one" style={{height: 290}}/>
            <img src={require('../public/IMG_0070.png')} alt="app img two" style={{height: 290}}/>
            <img src={require('../public/IMG_0071.png')} alt="app img three" style={{height: 290}}/>
          </div>
        </Fragment>
      )
    } else if (this.props.softipy) {
      return (<Fragment>
          <iframe title="Blushing Beaut" width="680" height="315" src="https://www.youtube.com/embed/Nf_X9NSCpeE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div style={{width: 680, height: 315, display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}} onMouseEnter={()=>this.setState({hover: true})} onMouseLeave={()=>this.setState({hover: false})}>
            {this.state.hover ?
              <div className="hover-class" style={{position: 'absolute', width: 680, height: 315, backgroundColor: 'rgba(108, 92, 231,0.7)', borderRadius: 10, display: 'flex', justifyContent: 'center', alignItems: 'center'}} onClick={()=>window.open("https://www.blushingbeaut.com")}>
                <h1 style={{color: 'white'}}>Visit Blushingbeaut.com</h1>
              </div>
            :
              null
            }
            <img src={require('../public/BBSSone.png')} alt="app img one" style={{height: 290}}/>
          </div>
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
