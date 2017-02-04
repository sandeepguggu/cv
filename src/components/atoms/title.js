import React from 'react';

import './title.scss';
export default class Title extends React.Component {
  render() {
    let name = "I'M ANDEEP";
    let role = "UI DEVELOPER";
    return (
      <span className="title">
        <div className="name">{name}</div>
        <div className="divider" />
        <div className="role">{role}</div>
      </span>
    );
  }
}
