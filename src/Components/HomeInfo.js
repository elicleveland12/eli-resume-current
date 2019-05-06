import React from 'react';
import '../App.css';



export default class HomeInfo extends React.Component {

  state = {
    collegeDiv: false,
    flatiron: false,
    workExp: false,
  }

  toggleCollegeDetails = () => {
    this.setState({
      collegeDiv: !this.state.collegeDiv,
    })
  }

  toggleFlatironDetails = () => {
    this.setState({
      flatiron: !this.state.flatiron,
    })
  }

  toggleWorkExp = () => {
    this.setState({
      workExp: !this.state.workExp
    })
  }

  renderCollegeDetails = () => {
    if (this.state.collegeDiv) {
      return (<div className="college-detailed">
        <div style={{order: 2}}><img src={('https://upload.wikimedia.org/wikipedia/en/f/f1/Clarkson-seal.png')} alt="Clarkson" className="icon" onClick={this.toggleCollegeDetails}/></div>
        <div style={{order: 1, marginTop: 20}} className="deets"><h3 style={{marginLeft: 15}}>Engineering & Management, Bachelor of Science</h3>
        <h4>August 2012 - May 2016</h4>
        <h4>Potsdam, NY</h4></div>
      </div>)
    } else {
      return (<div className="college">
        <img src={('https://upload.wikimedia.org/wikipedia/en/f/f1/Clarkson-seal.png')} alt="Clarkson" className="icon" onClick={this.toggleCollegeDetails}/>
      </div>)
    }
  }

  renderFlatironDetails = () => {
    if (this.state.flatiron) {
      return (<div className="flatiron-detailed">
        <div style={{order: 1}}><img src={('https://cdn.evbuc.com/images/48394057/258081453087/2/logo.png')} alt="Clarkson" className="icon" onClick={this.toggleFlatironDetails}/></div>
        <div style={{order: 2, marginTop: 30}} className="deets"><h3>Software Engineering Immersive Bootcamp</h3>
        <h4>January 2019 - April 2019</h4>
        <h4>New York, NY</h4></div>
      </div>)
    } else {
      return (<div className="flatiron">
        <img src={('https://cdn.evbuc.com/images/48394057/258081453087/2/logo.png')} alt="Flatiron" className="icon" onClick={this.toggleFlatironDetails}/>
      </div>)
    }
  }

  renderWorkExp = () => {
    if (this.state.workExp) {
      return (<div className="workExp-detailed">
        <div style={{order: 2, marginTop: 80}}><img src={('http://plctrenching.com/dist/img/plc-logo.png')} alt="PLC" className="icon" onClick={this.toggleWorkExp}/></div>
        <div style={{order: 1}} className="deets">
          <h3>Project Manager</h3>
          <ul style={{textAlign: 'left', lineHeight: 1.3}}>
            <li>Managed operations including the trenching and backfilling of under-ground cable on renewable energy projects</li>
            <li>Planned and supervised day-to-day operations including materials management, equipment, and labor force management</li>
            <li>Maintained constant contact with customers’ and other sub-contractors’ management teams</li>
            <li>Orchestrated a crew that set the company’s single-day production record of just over 17,000 linear feet of installed cable</li>
          </ul>
        </div>
      </div>)
    } else {
      return (<div className="workExp" style={{marginTop: 80}}>
        <img src={('http://plctrenching.com/dist/img/plc-logo.png')} alt="Retrievr" className="icon" onClick={this.toggleWorkExp}/>
      </div>)
    }
  }

  render() {
    return (
      <div className="resume">
        {this.renderCollegeDetails()}
        {this.renderFlatironDetails()}
        {this.renderWorkExp()}
      </div>
    );
  }
}
