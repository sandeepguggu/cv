import React from 'react';

import SocialIcon from 'atoms/social-icon';

import './social-profile.scss';
export default class SocialProfile extends React.Component {
  render() {
    return (
      <div className="social-profile">
        <SocialIcon icon="facebook"
          link="https://www.facebook.com/sandeep.guggu" />
        <SocialIcon icon="github"
          link="https://github.com/sandeepguggu" />
        <SocialIcon icon="linkedin"
          link="https://www.linkedin.com/in/sandeep-yadav-54703934" />
      </div>
    );
  }
}
