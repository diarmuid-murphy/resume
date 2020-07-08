import React from 'react';
import data from './data.js';

import Header from './components/Header';
import SkillsAndAbilities from './components/SkillsAndAbilities';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';

import './App.css';
import Address from './components/Address';

class App extends React.Component {
  initialState = {
    isRendered: false,
		address: {
      city: '***********',
			state: JSON.parse(atob(data)).address.state,
      stateShort: JSON.parse(atob(data)).address.stateShort,
      phone: '(***) ***-1258',
      linkedIn: 'https://www.linkedin.com/in/**************/',
      github: 'http://www.github.com/********-******/',
      email: '********.***@*****.com',
      name: 'D******* M*****'
    },
    skillsAndAbilities: JSON.parse(atob(data)).skillsAndAbilities,
    education: JSON.parse(atob(data)).education,
    certifications: [
      { "name": "Front End Web Development" },
      { "name": "Google Online Marketing Qualification" },
      { "name": "ReactJS" },
      { "name": "Drone Photography" }
    ],
    timeLeft: '3:00'
  }

  componentWillMount() {
    const hiddenCompanies = JSON.parse(atob(data)).experience.map((job) => {
      return {
        role: job.role,
        company: '**********',
        website: 'https://www.example.org/',
        years: job.years,
        duties: job.duties
      }
    });

    this.initialState.experience = hiddenCompanies;

    this.setState(this.initialState);
  }

  componentDidMount() {
    const today = new Date();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    document.title = `${JSON.parse(atob(data)).address.name} Resume - ${months[today.getMonth()]} ${today.getFullYear()}`;

    // remove this
    // console.log(btoa(JSON.stringify(data)));
    console.log(data);
    console.log(JSON.parse(atob(data)));
  // END test code
  }

  resetState = () => this.setState(this.initialState);

  reveal = () => {
    this.setState({
      isRendered: true,
      address: JSON.parse(atob(data)).address,
      experience: JSON.parse(atob(data)).experience,
      certifications: JSON.parse(atob(data)).certifications
    });

    // 3 mins * 60 seconds * 1000 milliseconds
    const timeVisible = 3 * 60 * 1000;
    let timeLeft = timeVisible;

    const myInterval = setInterval(() => {
      timeLeft = timeLeft - 1000;
      let minsLeft = Math.floor((timeLeft / 1000) / 60);
      let secondsLeft = (timeLeft / 1000) % 60;

      secondsLeft < 10 ? secondsLeft = '0' + secondsLeft : secondsLeft = secondsLeft + 0;

      if (minsLeft === 0 && secondsLeft === '00') {
        clearInterval(myInterval);

        this.setState({
          timeLeft: '3:00'
        });
      }

      this.setState({
        timeLeft: `${minsLeft}:${secondsLeft}`
      });
    }, 1000);

    setTimeout(this.resetState, timeVisible);
  };

  render() {
    return (
      <div className="container">
        <Header
          isRendered={this.state.isRendered}
          name={this.state.address.name}
        >
          <Address
            address={this.state.address}
            reveal={this.reveal}
            isRendered={this.state.isRendered}
            timeLeft={this.state.timeLeft}
          />
        </Header>
        <SkillsAndAbilities skillsAndAbilities={this.state.skillsAndAbilities} />
        <Experience experience={this.state.experience} />
        <Education education={this.state.education} />
        <Certifications certifications={this.state.certifications} />

        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
