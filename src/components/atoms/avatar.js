import React from 'react';

import './avatar.scss';
export default class Avatar extends React.Component {
  render() {
    return (
      <span className="avatar">
        <img src="images/avatar.jpg" />
      </span>
    );
  }
}
