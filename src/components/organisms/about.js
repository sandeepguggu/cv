import React from 'react';

import Header from 'atoms/header';
import SocialProfile from 'molecules/social-profile';

import './about.scss';
export default class Intro extends React.Component {
  render() {
    return (
      <section className="about-me">
        <Header name="About Me" icon="about" />
        <p>
          I am a front end web developer with about 5 years of experience
          building multiple apps ground up for a bunch of startups using a
          wide range of technologies and stacks. I learn things quick and
          build fluent and responsive apps from scratch leading teams and
          taking ownership.
        </p>
        <SocialProfile />
      </section>
    );
  }
}
