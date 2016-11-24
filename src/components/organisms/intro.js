import React from 'react';

import Avatar from 'atoms/avatar';
import Title from 'atoms/title';

import './intro.scss';
export default class Intro extends React.Component {
  render() {
    return (
      <section className="intro">
        <Avatar />
        <Title />
      </section>
    );
  }
}
