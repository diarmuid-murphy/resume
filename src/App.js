import React from 'react';
import logo from './logo.svg';
import data from './data.json';

import Header from './components/Header';

import './App.css';
import Address from './components/Address';

class App extends React.Component {
  state = {
    isRendered: false,
		address: {
      city: 'XXXXXXXXXXX',
			state: 'XXXXXXXXXX',
      stateShort: 'XX',
      phone: '(123) 456-7891',
      linkedIn: 'LinkedIn',
      github: 'GitHub',
      email: 'Email',
      name: 'XXXXXXXX XXXXXX'
		}
  }

  reveal = () => {
    this.setState({
      isRendered: true,
      address: data.address
    });
  };

  render() {
    return (
      <div className="container">
        <Header>
          <Address address={this.state.address} />
        </Header>
        {/* <SkillsAndAbilities />
        <Experience />
        <Education />
        <Certifications />
        <Footer /> */}
        <div className="text-center">
          {!this.state.isRendered ? <button onClick={this.reveal}>Click here to reveal</button> : null}
        </div>
      </div>
    );
  }
}

export default App;
