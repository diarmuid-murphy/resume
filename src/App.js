import React from 'react';
// import logo from './logo.svg';
import data from './data.json';

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
			state: data.address.state,
      stateShort: data.address.stateShort,
      phone: '(123) 456-7891',
      linkedIn: 'https://www.linkedin.com/in/myprofile/',
      github: 'http://www.github.com/my-username/',
      email: 'hidden@mail.com',
      name: 'D******* M*****'
    },
    skillsAndAbilities: data.skillsAndAbilities,
    education: data.education,
    certifications: [
      { "name": "Front End Web Development" },
      { "name": "Google Online Marketing Qualification" },
      { "name": "ReactJS" },
      { "name": "Drone Photography" }
    ]
  }

  componentWillMount() {
    const hiddenCompanies = data.experience.map((job) => {
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

  resetState = () => this.setState(this.initialState);

  reveal = () => {
    this.setState({
      isRendered: true,
      address: data.address,
      experience: data.experience,
      certifications: data.certifications
    });

    setTimeout(this.resetState, 60 * 1000);
  };

  render() {
    return (
      <div className="container-fluid">
        <Header>
          <Address
            address={this.state.address}
            reveal={this.reveal}
            isRendered={this.state.isRendered}
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
