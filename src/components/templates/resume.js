import React from 'react';

import Intro from 'organisms/intro';
import About from 'organisms/about';
import MySkills from 'organisms/my-skills';
import DiagonalBackground from 'atoms/diagonal-background';
import MyEducation from 'organisms/my-education';
import WorkExperience from 'organisms/work-experience';

import './resume.scss';
export default class Resume extends React.Component {
  render() {
    return (
      <div className="resume">
        <Intro />
        <About />
        <DiagonalBackground />
        <MySkills />
        <DiagonalBackground invert />
        <MyEducation />
        <WorkExperience />
      </div>
    );
  }
}
