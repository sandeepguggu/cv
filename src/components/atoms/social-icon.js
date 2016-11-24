import React from 'react';

const icons = {
  facebook: require('images/facebook-logo.svg'),
  github: require('images/github-logo.svg'),
  linkedin: require('images/linkedin-logo.svg')
};

import './social-icon.scss';
export default class SocialIcon extends React.Component {
  static propTypes = {
    icon: React.PropTypes.string,
    link: React.PropTypes.string
  };

  render() {
    let { icon, link } = this.props;

    return (
      <a className="social-icon" href={link} target="_blank"
        dangerouslySetInnerHTML={{
          __html: icons[icon]
        }}
      />
    );
  }
}
