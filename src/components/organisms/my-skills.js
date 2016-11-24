import React from 'react';

import Header from 'atoms/header';
import Skills from 'molecules/skills';

import './my-skills.scss';
export default class MySkills extends React.Component {
  render() {
    return (
      <section className="my-skills">
        <Header name="My Skills" icon="skills" invert />
        <Skills />
      </section>
    );
  }
}
