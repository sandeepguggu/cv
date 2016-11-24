import React from 'react';

import Header from 'atoms/header';
import Education from 'molecules/education';

import './my-education.scss';
export default class MyEducation extends React.Component {
  render() {
    return (
      <section className="my-education">
        <Header name="Education" icon="education" />
        <Education />
      </section>
    );
  }
}
