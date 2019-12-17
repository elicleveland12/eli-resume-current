import React from 'react';
import '../App.css';



export default class SoftipyReadMe extends React.Component {

  render() {
    return (
      <div className="resume">
        <h1>README</h1>
        <p>Blushing Beaut is an eCommerce application built using React and Node that gives users the ability to customize stainless-steel coffee and wine tumblers with their choice of color, pattern, text, font, and decals. The app is also wired to Stripe's API for the handling of payment processing. </p>
        <div>
          <img src={('https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png')} alt="React" className="lang-icon"/>
          <img src={('https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg')} alt="Node" className="lang-icon"/>
          <img src={('https://stripe.com/img/v3/home/twitter.png')} alt="Stripe" className="lang-icon"/>
        </div>
        <h4> React </h4>
        <h4> Node JS </h4>
        <h4> Stripe API </h4>
        <br />
        <br />
        <h3>Full readme <a href="https://github.com/elicleveland12/blushing-beaut-react" target="_blank" rel="noopener noreferrer">Here</a></h3>
      </div>
    );
  }
}
